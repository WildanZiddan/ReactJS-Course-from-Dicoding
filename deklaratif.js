import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingLogo from './dicoding-logo.png';

const element = (
  <div>
    <h1>Biodata Diri</h1>
    <ul>
      <li>Nama: Wildan Yazid Ziddan</li>
      <li>Jurusan: Rekayasa Perangkat Lunak</li>
      <li>Yang dipelajar: React JS</li>
      <img src={DicodingLogo} alt="Dicoding logo" />
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
