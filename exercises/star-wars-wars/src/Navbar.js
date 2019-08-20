import React from 'react'

import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <ul className='navbar-container'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/characters'>Characters</Link>
        </ul>
    )
}


export default Navbar