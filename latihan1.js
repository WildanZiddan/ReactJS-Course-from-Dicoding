import React from 'react';
import { createRoot } from 'react-dom/client';

const heading = React.createElement ('h1', null, 'Biodata Diri');

const list1 = React.createElement('li', null, 'Nama: Wildan Yazid Ziddan');
const list2 = React.createElement('li', null, 'Jurusan: Rekayasa Perangkat Lunak');
const list3 = React.createElement('li', null, 'Yang dipelajari: React JS');


const unorderedList = React.createElement('ul', null, [list1,list2,list3]);
const container = React.createElement('div', null, [heading, unorderedList]);


const root = createRoot(document.getElementById('root'));
root.render(container);
