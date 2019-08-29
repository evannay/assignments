import React from 'react'

import Header from './Header.js'
import Navbar from './Navbar.js'
import Home from './Home.js'
import About from './About.js'
import Profile from './Profile.js'
import Favorites from './Favorites.js'
import Footer from './Footer.js'

import './App.css'

import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div> 
            <Navbar />
            {/* Header should contain the Navbar within it */}
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/profile' component={Profile}/>
                <Route path ='/favorites' component={Favorites}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App