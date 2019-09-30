import React from 'react'

import Header from './Header'
import RandomMath from './RandomMath'
import RandomDate from './RandomDate'
import RandomYear from './RandomYear'

const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <RandomMath />
            <RandomDate />
            <RandomYear />
        </div>
    )
}

export default App