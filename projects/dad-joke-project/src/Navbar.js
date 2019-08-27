import React from 'react'
import { withProvider } from './ContextProvider'

import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <ul className='navbar-container'>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/profile'>Profile</Link>
        </ul>
    )
}

export default withProvider(Navbar)