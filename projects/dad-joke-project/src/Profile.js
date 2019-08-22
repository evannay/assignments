import React from 'react'

import { withProvider } from './ContextProvider.js'

const Profile = (props) => {
    return(
        <div className='profile-container'>
            <button className='dark-theme-button' onClick={props.themeChange}>Change Color Scheme</button>
        </div>
    )
}

export default withProvider(Profile)