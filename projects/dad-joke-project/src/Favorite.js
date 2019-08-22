import React from 'react'

import { withProvider } from './ContextProvider'

const Favorite = (props) => {
    return (
        <div className='favorite'>
            {props.joke}
            <button onClick={() => props.deleteFavorite(props.joke)}>Delete</button>
        </div>
    )
}

export default withProvider(Favorite)