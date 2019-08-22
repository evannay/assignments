import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='navbar-container'>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/profile'>Profile</Link>
        </ul>
    )
}

export default Navbar