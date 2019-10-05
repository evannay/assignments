import React, { useState } from 'react'
import { useFavorites } from './FavoritesProvider'
import axios from 'axios'

const RandomYear = () => {
    const [ favorites, setFavorites ] = useFavorites()
    const [ input, setInputs ] = useState ({
        date: ''
    })
    const [ fact, setYearFact] = useState ({
        yearFact: '',
        isPresent: false
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({
            [name] : value
        })
    }

    const clearInputs = () => {
        setInputs({
            date: ''
        })
    }

    const generateYearFact = () => {
        axios.get(`http://numbersapi.com/${input.date}/year`).then(res => {
            setYearFact({
                yearFact: res.data,
                isPresent: true
            })
        })
    } 

    const saveFact = () => {
        let faves = [...favorites, fact.yearFact]
        setFavorites(
            faves
        )
        localStorage.setItem('favorites', JSON.stringify(faves))
    }


    return (
        <div className='random-year-container'>
            <input type="text" placeholder='YYYY' name='date' value={input.date} onChange={handleChange}/>
            <button onClick={generateYearFact}>Generate Year Fact</button>
            <button onClick={clearInputs}>Clear</button>
            <div className='fact-container'>
                {fact.yearFact}
            </div>
            <div className={fact.isPresent ? 'save-button' : 'hidden'}>
                <button onClick={saveFact}>Save</button>
            </div>
        </div>
    )
}

export default RandomYear