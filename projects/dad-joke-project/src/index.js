import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './ContextProvider'

import App from './App.js'

ReactDOM.render(
    <ContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ContextProvider>,
    document.getElementById('root')
)