import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-title'>
                <p>Umpqua Small Animal Clinic</p>
            </div>
            <div className='header-options'>
                <Link to ='/login'>Login</Link>
                <Link to ='/signup'>Sign Up</Link>
            </div>
         </div>
    )
}

export default Header