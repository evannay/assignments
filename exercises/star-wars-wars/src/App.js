import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Characters from './Characters'
import Character from './Character'

const App = () => {
    return (
        <div className='app-container'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/characters' component={Characters}/>
                <Route path=`{/characters/:${name}}` component={Character}/>
            </Switch>
        </div>
    )
}



export default App