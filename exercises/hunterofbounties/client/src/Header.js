import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='header-container'>
            <h1>BountyBoard</h1>
            <ul className='navbar-container'>
                <Link to='/'>Bounty Board</Link>
                <Link to='/form'>Add Bounty</Link>
            </ul>
        </div>
    )
}

export default Header