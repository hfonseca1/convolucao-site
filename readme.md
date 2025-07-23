# Estrutura do Projeto:
```
├───backend
│       main.py
│       requirements.txt
│
└───vite-project
    │   .gitignore
    │   eslint.config.js
    │   package-lock.json
    │   package.json
    │   README.md
    │   vite.config.js
    │
    ├───public
    │       icon.jpg
    │
    └───src
        │   main.jsx
        │
        ├───assets
        │   │   foto.jpg
        │   │
        │   └───filtros
        │           imagem.jpeg
        │           imagem_blur.jpg
        │           imagem_emboss.jpg
        │           imagem_gray.jpg
        │           imagem_hori.jpg
        │           imagem_lap.jpg
        │           imagem_sharpen.jpg
        │           imagem_vert.jpg
        │
        ├───components
        │       Pixel.jsx
        │       SelectKernel.jsx
        │       Upload.jsx
        │
        └───pages
                Home.css
                Home.jsx
```

# Introdução
O avanço das tecnologias de visão computacional tem impulsionado aplicações em áreas como segurança, saúde, transporte e inteligência artificial. No entanto, os conceitos fundamentais por trás do processamento de imagens, como o funcionamento de kernels convolucionais, ainda são abstratos para iniciantes na área.
Este projeto tem como objetivo desenvolver uma ferramenta educacional interativa, baseada em React + Flask, que auxilie estudantes a entenderem como os computadores enxergam imagens e como kernels são aplicados nelas. A ideia do site é que o usuário aprenda gradativamete como funcionam os kernels, começando com a visualização da matriz de uma imagem (escala de cinza), até a possibilidade de enviar a sua própria imagem para ver os filtros sendo aplicados.

## Técnicas Utilizadas

-  **Kernels de Convolução** aplicados com `cv2.filter2D`:
  - Original (sem filtro)
  - Escala de cinza
  - Detecção de borda horizontal (Sobel X)
  - Detecção de borda vertical (Sobel Y)
  - Laplaciano
  - Blur (suavização)
  - Sharpen (realce)
  - Emboss (efeito 3D)

-  **Frontend (React):**
  - Upload da imagem
  - Interface dinâmica com visualização dos filtros

-  **Backend (Flask):**
  - Processamento da imagem com OpenCV
  - Conversão para Base64 e envio como JSON

## 🚀 Como Executar Localmente

###  Pré-requisitos

- Node.js e npm instalados
- Python 3 instalado
- `pip` e ambiente virtual Python (venv)

---
