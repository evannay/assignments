import React from 'react'
import ReactDOM from 'react-dom'

import { FavoritesProvider } from './FavoritesProvider'

import './Styles.css'
import App from './App'

ReactDOM.render(
    <FavoritesProvider>
        <App />
    </FavoritesProvider>,
    document.getElementById('root')
)