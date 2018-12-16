import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ItemProvider from './context/ItemProvider'
import './style.css'


ReactDOM.render(
    <BrowserRouter>  
        <ItemProvider>
            <App/>
        </ItemProvider> 
    </BrowserRouter>,
document.getElementById('root'))