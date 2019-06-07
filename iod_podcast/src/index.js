import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PdfProvider from './context/PdfProvider'
import AuthProvider from './context/AuthProvider'
import './index.css';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            <PdfProvider>
                <App />
            </PdfProvider>
        </AuthProvider>
    </BrowserRouter>, document.getElementById('root'));

