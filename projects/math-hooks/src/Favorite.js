import React from 'react'
import { useFavorites } from './FavoritesProvider'


const Favorite = (props) => {
    const [ favorites, setFavorites ] = useFavorites()

    const deleteFavorite = (thisFave) => {
        let faves = [...favorites]
        let newFaves = faves.filter(fave => fave !== thisFave)
        setFavorites({
            newFaves
        }, () => {
            localStorage.setItem('favorites', JSON.stringify('favorites'))
        })
    }

    return (
        <div className='favorite-container'>
            <p>{props.fact}</p>
                <button onClick={deleteFavorite}>Delete</button>
        </div>
        
    )
}

export default Favorite