import React, { useState } from 'react'
import { useFavorites } from './FavoritesProvider'
import axios from 'axios'

const RandomDate = () => {
    const [ favorites, setFavorites ] = useFavorites()
    const [ input, setInputs ] = useState ({
        date: ''
    })
    const [ fact, setDateFact ] = useState ({
        dateFact: '',
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

    const generateDateFact = () => {
        axios.get(`http://numbersapi.com/${input.date}/date`).then(res => {
            setDateFact({
                dateFact: res.data,
                isPresent: true
            })
        })
    }

    const saveFact = (fave) => {
        setFavorites(prev => ({
            favorites: [...prev.favorites, fact.dateFact]
        }))
        console.log(favorites.favorites)
    }
    


    return (
        <div className='random-date-container'>
            <input type="text" onChange={handleChange} placeholder='Enter Date M/D' name='date' value={input.date}/>
            <button onClick={generateDateFact}>Generate Date Fact</button>
            <button onClick={clearInputs}>Clear</button>
            <div>
                {fact.dateFact}
            </div>
            <div className={fact.isPresent ? 'save-button' : 'hidden'}>
                <button onClick={saveFact}>Save</button>
            </div>
        </div>
    )
}

export default RandomDate