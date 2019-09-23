import React from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from './AuthContext'


const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='header-title'>
                <p>Umpqua Small Animal Clinic</p>
            </div>
            <div className='header-options'>
                <Link to ='/login'>Login</Link>
                <Link to ='/signup'>Sign Up</Link>
                <button onClick={props.logout}>Logout</button>
            </div>
         </div>
    )
}

export default withAuth(Header)