import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PlantProvider from './context/PlantProvider';
import GardenProvider from './context/GardenProvider'
import CompanionProvider from './context/CompanionProvider'

ReactDOM.render(
    <BrowserRouter>
        <PlantProvider>
        <GardenProvider>
        <CompanionProvider>
            <App />
        </CompanionProvider>
        </GardenProvider>
        </PlantProvider>
    </BrowserRouter>
, document.getElementById('root'));

