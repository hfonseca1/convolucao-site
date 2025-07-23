import React, { useState } from 'react';
import imagem_original from '../assets/filtros/imagem_gray.jpg';
import imagem_horizontal from '../assets/filtros/imagem_hori.jpg';
import imagem_vertical from '../assets/filtros/imagem_vert.jpg';
import imagem_blur from '../assets/filtros/imagem_blur.jpg';
import imagem_emboss from '../assets/filtros/imagem_emboss.jpg';
import imagem_laplaciano from '../assets/filtros/imagem_lap.jpg';
import imagem_sharpen from '../assets/filtros/imagem_sharpen.jpg';


export default function SelectKernel() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const matrices = {
        vertical: [
            [-1, 0, 1],
            [-2, 0, 2],
            [-1, 0, 1],
        ],
        horizontal: [
            [-1, -2, -1],
            [0, 0, 0],
            [1, 2, 1],
        ],
        laplaciano: [
            [0, -1, 0],
            [-1, 4, -1],
            [0, -1, 0],
        ],
        blur: [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ],
        sharpen: [
            [0, -1, 0],
            [-1, 5, -1],
            [0, -1, 0],
        ],
        emboss: [
            [-2, -1, 0],
            [-1, 1, 1],
            [0, 1, 2],
        ]
    };

    const imagens = {
        vertical: imagem_vertical,
        horizontal: imagem_horizontal,
        laplaciano: imagem_laplaciano,
        blur: imagem_blur,
        sharpen: imagem_sharpen,
        emboss: imagem_emboss,
    };

    return (
        <div style={{ paddingTop: '50px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                <select onChange={handleChange} style={{ color: 'black', width: '200px', height: '40px', fontSize: '20px' }} value={selectedOption || ''}>
                    <option value="">Selecione...</option>
                    <option value="vertical">Bordas Verticais</option>
                    <option value="horizontal">Bordas Horizontais</option>
                    <option value="laplaciano">Laplaciano</option>
                    <option value="blur">Desfoque (Blur)</option>
                    <option value="sharpen">Realce (Sharpen)</option>
                    <option value="emboss">Relevo (Emboss)</option>
                </select>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '100px' }}>
                    <h3>Imagem Original</h3>
                    <img
                        src={imagem_original}
                        alt="Imagem Original"
                        style={{ height: '300px', width: '300px', marginTop: '20px' }}
                    />
                </div>

                {selectedOption && (
                    <div style={{ display: 'flex', }}>
                        <table
                            style={{ marginRight: '100px', borderCollapse: 'collapse', width: '300px', height: '300px', marginTop: '20px' }}>
                            <tbody>
                                {matrices[selectedOption].map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td
                                                key={cellIndex}
                                                style={{ border: '1px solid black', padding: '10px', width: '40px', height: '40px' }}
                                            >
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <h3>Imagem após convolução</h3>
                            <img
                                src={imagens[selectedOption]}
                                alt={'Imagem após kernel'}
                                style={{ height: '300px', width: '300px', marginTop: '20px' }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
