import React from 'react'
import ReactDOM from 'react-dom'

import { FavoritesProvider } from './FavoritesProvider'
import { BrowserRouter } from 'react-router-dom'

import './Styles.css'
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <FavoritesProvider>
            <App />
        </FavoritesProvider>
    </BrowserRouter>,
    document.getElementById('root')
)