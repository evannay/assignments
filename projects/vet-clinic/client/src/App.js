import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import AppointmentList from './Appointments/AppointmentList'



const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/appointments' component={AppointmentList}/>
            </Switch>
        </div>
    )
}

export default App