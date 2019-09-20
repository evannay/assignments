import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import BountyProvider from './BountyProvider'

ReactDOM.render(
    <BountyProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </BountyProvider>,
    document.getElementById('root')
)
