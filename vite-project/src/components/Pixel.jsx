import React, { useEffect, useRef, useState } from 'react';
import foto from '../assets/foto.jpg'; // sua imagem já em grayscale]

import { Container } from '@mui/material';

export default function Pixel() {
    const canvasRef = useRef(null);
    const [matrix, setMatrix] = useState([]);
    const [highlight, setHighlight] = useState({ x: null, y: null });

    const imgSize = 32; // tamanho da imagem (ajuste se necessário)

    useEffect(() => {
        const img = new Image();
        img.src = foto;
        img.crossOrigin = 'anonymous';

        img.onload = () => {
            const canvas = canvasRef.current;
            canvas.width = imgSize;
            canvas.height = imgSize;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, imgSize, imgSize);

            const { data } = ctx.getImageData(0, 0, imgSize, imgSize);
            const mat = [];

            for (let y = 0; y < imgSize; y++) {
                const row = [];
                for (let x = 0; x < imgSize; x++) {
                    const i = (y * imgSize + x) * 4;
                    const gray = data[i]; // apenas o canal R (serve também para G ou B, pois é grayscale)
                    row.push(gray);
                }
                mat.push(row);
            }

            setMatrix(mat);
        };
    }, []);

    const drawHighlight = (x, y) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.src = foto;
        img.onload = () => {
            ctx.drawImage(img, 0, 0, imgSize, imgSize);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 0.5;
            ctx.strokeRect(x, y, 1, 1);
        };
    };

    const handleHover = (x, y) => {
        setHighlight({ x, y });
        drawHighlight(x, y);
    };

    return (
        <div style={{ display: 'flex', gap: '20px', }}>
            <div style={{ fontSize: '8px', lineHeight: '10px', color: 'white' }}>
                <table>
                    <tbody>
                        {matrix.map((row, y) => (
                            <tr key={y}>
                                {row.map((val, x) => (
                                    <td
                                        key={x}
                                        onMouseEnter={() => handleHover(x, y)}
                                        style={{
                                            padding: '2px',
                                            color: highlight.x === x && highlight.y === y ? 'red' : 'white',
                                            border: highlight.x === x && highlight.y === y ? '1px solid red' : 'none',
                                            cursor: 'crosshair',
                                        }}
                                    >
                                        {val}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <canvas
                    ref={canvasRef}
                    style={{
                        width: 512,
                        height: 512,
                        imageRendering: 'pixelated',
                        border: '1px solid black',
                    }}
                />
            </div>
            <div>
            </div>
        </div>
    );
}
