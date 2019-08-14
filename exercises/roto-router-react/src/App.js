import React from 'react'

import Header from './Header.js'
import Navbar from './Navbar.js'
import Body from './Body.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import About from './About.js'
import './App.css'

import { Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <div>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path='/' component={Body} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App