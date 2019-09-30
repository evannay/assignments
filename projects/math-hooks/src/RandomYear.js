import React, { useState } from 'react'
import axios from 'axios'

const RandomYear = () => {
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


    return (
        <div className='random-year-container'>
            <input type="text" placeholder='YYYY' name='date' value={input.date} onChange={handleChange}/>
            <button onClick={generateYearFact}>Generate Year Fact</button>
            <button onClick={clearInputs}>Clear</button>
            <div>
                {fact.yearFact}
            </div>
            <div className={fact.isPresent ? 'save-button' : 'hidden'}>
                <button>Save</button>
            </div>
        </div>
    )
}

export default RandomYear