import React from 'react'
import Header from './Header'
import './styles.css'
import Body from './Body.js'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Services from './Services.js'

const App = () => {
    return (
        <div className='app-container'>
            <Header></Header>
            <Body></Body>
            <Navbar></Navbar>
            <Footer></Footer>
            <Services></Services>
        </div>
    )
}

export default App

