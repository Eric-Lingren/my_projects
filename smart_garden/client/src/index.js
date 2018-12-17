import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import PlantProvider from './context/PlantProvider'

ReactDOM.render(
    <BrowserRouter>
        <PlantProvider>
            <App />
        </PlantProvider>
    </BrowserRouter>
, document.getElementById('root'));

