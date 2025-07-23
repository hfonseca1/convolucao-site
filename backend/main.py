from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import base64

app = Flask(__name__)
CORS(app)

def imagem_base64(img):
    _, buffer = cv2.imencode('.jpg', img)
    return base64.b64encode(buffer).decode('utf-8')

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'erro': 'Nenhum arquivo enviado'}), 400

    file = request.files['image']
    file_bytes = np.frombuffer(file.read(), np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)

    if img is None:
        return jsonify({'erro': 'Erro ao ler a imagem'}), 500

    img_resized = cv2.resize(img, (256, 256)) 
    img_gray = cv2.cvtColor(img_resized, cv2.COLOR_BGR2GRAY)

    kernels = {
        'vertical': np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]], dtype=np.float32),
        'horizontal': np.array([[-1, -2, -1], [0, 0, 0], [1, 2, 1]], dtype=np.float32),
        'laplaciano': np.array([[0, -1, 0], [-1, 4, -1], [0, -1, 0]], dtype=np.float32),
        'blur': np.ones((3, 3), np.float32) / 9,
        'sharpen': np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]], dtype=np.float32),
        'emboss': np.array([[-2, -1, 0], [-1, 1, 1], [0, 1, 2]], dtype=np.float32),
    }

    imagens_base64 = {
        'original': imagem_base64(img_resized),
        'cinza': imagem_base64(img_gray),
    }

    for nome, kernel in kernels.items():
        filtrada = cv2.filter2D(img_gray, -1, kernel)
        imagens_base64[nome] = imagem_base64(filtrada)

    return jsonify(imagens_base64)

if __name__ == '__main__':
    app.run(debug=True)
