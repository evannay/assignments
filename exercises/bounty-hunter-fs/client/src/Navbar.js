import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='navbar-container'>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/'>Login</Link>
            <Link to='/bountyboard'>Bounty Board</Link>
            <button>Logout</button>
        </ul>
    )
}

export default Navbar