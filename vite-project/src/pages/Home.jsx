import React, { useState } from 'react';
import SelectKernel from '../components/SelectKernel';
import Upload from '../components/Upload';
import Pixel from '../components/Pixel';

import { Container } from '@mui/material';

import './Home.css'

export default function Home() {
  return (
    <div style={{ background: '#1f1e1eff' }}>
      <Container maxWidth="lg" sx={{
        background: '#313030ff'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center', paddingTop: '20px' }}>
          <h1>Visualização de Kernels</h1>
          <p>A convolução de imagem é uma tecnica fundamental na visão computacional, utilizada para modificar ou extrair informações de uma imagem.</p>
          <p>Na prática, convolução significa aplicar uma pequena matriz (chamado de kernel ou filtro) sobre uma imagem, realizando cálculos entre os valores do kernel e os pixels vizinhos. Isso gera uma nova imagem transformada.</p>
          <p>O kernel percorre a imagem pixel por pixel, multiplicando seus próprios valores pelos valores da região da imagem onde está posicionado. A soma desses produtos é usada para formar o novo valor do pixel na imagem de saída.</p>
          <p>Essa operação pode servir para:</p>
          <ul>
            <li>Detectar bordas (realçar transições brutas de cor)</li>
            <li>Suavizar (remover ruidos)</li>
            <li>Realçar detalhes (aumentar contraste local)</li>
            <li>Aplicar efeitos visuais (como desfoque, nitidez, entre outros)</li>
          </ul>
          <h2>Como o computador enxerga uma imagem?</h2>
          <p>Primeiramente é essencial o entendimento sobre como os computadores visualiazm imagens. Então, vamos ver a explicação logo abaixo</p>
          <p>À esquerda, você vê a matriz de pixels que representa a imagem. Cada número indica o nível de intensidade luminosa de um pixel em escala de cinza, os valores variam de 0 (preto) a 255 (branco).</p>
          <p>À direita, essa mesma matriz é renderizada como imagem. O que para nós parece uma imagem normal, para o computador é apenas uma tabela de números.</p>
          <Pixel />
          <h2>Aplicando Kernel em Imagens</h2>
          <p>Um kernel (ou filtro convolucional) é uma pequena matriz que percorre a imagem original para modificar seus pixels.</p>
          <p>À esquerda, você pode ver a imagem original. No centro, você pode escolher um dos kernels disponíveis, cada um com uma função específica.</p>
          <p>Ao aplicar o kernel, ele "varre" a imagem realizando cálculos com a matriz de pixels original. O resultado desse processo é exibido à direita, permitindo que você veja na prática como cada filtro altera a imagem.</p>
          <p>Esse é o princípio básico por trás de visão computacional e processamento de imagem em inteligência artificial.</p>
          <SelectKernel />
          <h2>Teste com sua própria imagem</h2>
          <p>Agora é a sua vez de experimentar!</p>
          <p>Envie uma imagem e veja como ela ficará após a aplicação dos kernels.</p>
          <p>Ao fazer isso, o mesmo processo de convolução será aplicado à sua imagem: a matriz do kernel irá interagir com os pixels da imagem, modificando seus valores conforme o tipo de filtro escolhido.</p>
          <Upload />
        </div>
      </Container >
    </div>
  );
}
