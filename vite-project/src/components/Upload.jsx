import React, { useState } from 'react';

export default function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Selecione uma imagem primeiro.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Erro ao processar a imagem.');
            }

            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error(error);
            alert('Erro ao enviar a imagem.');
        }
    };

    const titulos = {
        original: 'Imagem Original',
        cinza: 'Escala de Cinza',
        vertical: 'Kernel: Bordas Verticais',
        horizontal: 'Kernel: Bordas Horizontais',
        laplaciano: 'Kernel: Laplaciano',
        blur: 'Kernel: Desfoque (Blur)',
        sharpen: 'Kernel: Realce (Sharpen)',
        emboss: 'Kernel: Relevo (Emboss)',
    };

    return (
        <div style={{ textAlign: 'center', paddingTop: '40px' }}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload} style={{ marginLeft: '10px', marginBottom: '30px' }}>Enviar Imagem</button>

            {images && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
                    {Object.entries(images).map(([key, base64], index) => (
                        <div key={index} style={{ margin: '20px', textAlign: 'center' }}>
                            <h4>{titulos[key]}</h4>
                            <img
                                src={`data:image/jpeg;base64,${base64}`}
                                alt={key}
                                style={{ width: '256px', height: '256px', objectFit: 'contain', border: '1px solid #ccc' }}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
