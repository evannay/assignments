import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Header from './Header'
import RandomMath from './RandomMath'
import RandomDate from './RandomDate'
import RandomYear from './RandomYear'
import Navbar from './Navbar'
import Favorites from './Favorites'


const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Navbar />
            <RandomMath />
            <RandomDate />
            <RandomYear />
            <Switch>
                <Route path='/favorites' component={Favorites} />
            </Switch>
        </div>
    )
}

export default App