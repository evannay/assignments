import React from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from './AuthContext'


const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='header-options'>
                <Link to ='/login'>Login</Link>
                <Link to ='/signup'>Sign Up</Link>
                <button className='logout-button' onClick={props.logout}>Logout</button>
            </div>
         </div>
    )
}

export default withAuth(Header)