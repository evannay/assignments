import React, { useState } from 'react'
import { useFavorites } from './FavoritesProvider'
import axios from 'axios'

const RandomMath = () => {
    const [ favorites, setFavorites ] = useFavorites()
    const [fact, setMathFact] = useState({
        mathFact: '',
        isPresent: false
    })
   

    const generateMathFact = () => {
        axios.get('http://numbersapi.com/random/math').then(res => {
            setMathFact({
                mathFact: res.data,
                isPresent: true
            })
        })
    }

    const saveFact = () => {
        let faves = [...favorites, fact.mathFact]
        setFavorites(
            faves
        )
        localStorage.setItem('favorites', JSON.stringify(faves))
    }

    return (
        <div className='random-math-container'>
            <button onClick={generateMathFact}>Generate Random Math Fact</button>
            <div className='fact-container'>
                {fact.mathFact}
            </div>
            <div className={fact.isPresent ? "save-button" : "hidden"}>
                <button onClick={saveFact}>Save</button>
            </div>
        </div>
    )


}

export default RandomMath