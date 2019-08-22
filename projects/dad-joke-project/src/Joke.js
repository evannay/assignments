import React from 'react'

import { withProvider } from './ContextProvider.js'

const Joke = (props) => {
    console.log(props)
    return(
        <>
            <h1>
                {props.joke}
            </h1>
            <button className='save-button' onClick={()=> props.saveJoke(props.joke)}>Save</button>
            <div className={props.isSaved ? 'favorites-confirmation-true' : 'favorites-confirmation-false'}>
                Saved to favorites
            </div>
        </>
    )
}

export default withProvider(Joke)