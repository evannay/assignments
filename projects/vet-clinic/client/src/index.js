import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './AuthContext'


import App from './App'
import './Styles.css'


ReactDOM.render(
    <AuthContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContext>,
    document.getElementById('root')
)