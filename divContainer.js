import React from 'react';

const heading = React.createElement('h1', null, 'React');
const strong = React.createElement('strong', null, 'another way');
const paragraph = React.createElement('p', null, ['The ', strong, ' to build a web']);
const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

// abaikan kode di bawah ini
export default divContainer;
