import React from 'react'

const Joke = (props) => {
    return(
        <>
            <h1>
                {props.joke}
            </h1>
            <button className='save-button'>Save</button>
        </>
    )
}

export default Joke