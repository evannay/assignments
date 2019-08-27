import React from 'react'
import { withProvider } from './ContextProvider';

import Favorite from './Favorite.js'

const Favorites = (props) => {
    const mappedFavorites = props.savedJokes.map((savedJoke, i) => {
        return (
            <Favorite
             joke={savedJoke}
             key={i}
            />
        )
    })
    return(
        <div className='favorites-container'>
            { mappedFavorites } 
        </div>
    )
}

export default withProvider(Favorites)