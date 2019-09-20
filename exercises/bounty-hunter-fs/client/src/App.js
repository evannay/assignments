import React from 'react'
import Navbar from './Navbar'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import BountyBoard from './Bounties/BountyBoard'
import { Switch, Route } from 'react-router-dom'
console.log('hello')

const App = () => {
    return (
        <div className='app-container'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/bountyboard' component={BountyBoard} />
            </Switch>
        </div>
    )
}

export default App