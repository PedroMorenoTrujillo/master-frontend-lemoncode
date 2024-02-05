import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.scss';

import ListComponent from './components/List/listComponent';

const root = createRoot(document.getElementById('root'));
root.render(
    <div className="container">
        <h1 className="title">Hello From React Heroes</h1>
        <ListComponent />
    </div>
)