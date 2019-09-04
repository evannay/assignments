import React from 'react'

import BountyContainer from './BountyContainer.js'
import Header from './Header'
import Form from './Form'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <div>
            <Header />
            <Switch>
            <Route exact path='/' component={BountyContainer} />
            <Route path='/form' component={Form}/>
            </Switch>
        </div>
    )
}

export default App