import React from 'react'
import { useFavorites } from './FavoritesProvider'

import Favorite from './Favorite'

const Favorites = () => {
    const [ favorites ] = useFavorites()
    const mappedFavorites = favorites.map((item, i) => {
        return (
            <Favorite 
            key={i}
            fact={item}
            />
        )
    })
    return (
    <div className='favorites-container'>
        {mappedFavorites}
    </div>
    )
}

export default Favorites