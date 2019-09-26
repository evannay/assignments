import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import Hero from './Hero'
import AppointmentList from './Appointments/AppointmentList'
import ProtectedRoute from './Auth/ProtectedRoute'



const App = () => {
    return (
        <div className='app-container'>
            <Hero />
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <ProtectedRoute path='/appointments' component={AppointmentList}/>
            </Switch>
            <Header />
        </div>
    )
}

export default App