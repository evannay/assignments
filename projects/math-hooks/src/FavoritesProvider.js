import React, { useContext, useState, useMemo } from 'react'

const FavoritesContext = React.createContext()

const FavoritesProvider = props => {
    const  [favorites, setFavorites] = useState (
        JSON.parse(localStorage.getItem('favorites')) || []
    )
    const value = useMemo(() => [favorites, setFavorites], [favorites])
    return (
        <FavoritesContext.Provider value={value} {...props} />
    )
}

const useFavorites = () => {
    const context = useContext(FavoritesContext)
    if(!context){
        throw new Error("You must use FavoritesProvider to consume the Favorites Context")
    }
    return context
}

export { FavoritesProvider, useFavorites }