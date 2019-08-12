import React from 'react'

const Badge = (props) => {
    return(
        <div className='badge-container'>
            <h1 className='full-name'>{props.fullName}</h1>
            <div className='info-container'>
                <h4>{props.placeOfBirth}</h4>
                <h4>{props.phone}</h4>
                <h4>{props.email}</h4>
                <h4>{props.favoriteFood}</h4>
            </div>
            <p>About me: {props.aboutYourself}</p>
        </div>
    )
}

export default Badge