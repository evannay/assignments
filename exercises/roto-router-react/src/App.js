import React from 'react'


import {Switch, Route} from 'react-router-dom'

import Header from './Header.js'
import Navbar from './Navbar.js'
import Home from './Home.js'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'


const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Contact path='/contact' component={Contact}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App