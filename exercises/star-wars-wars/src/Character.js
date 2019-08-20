import React from 'react'

const Character = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h4>{props.eye_color}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.hair_color}</h4>
            <h4>{props.height}</h4>
            <h4>{props.mass}</h4>

        </div>
    )
}

export default Character