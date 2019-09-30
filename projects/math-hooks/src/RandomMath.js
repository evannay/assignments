import React, { useState } from 'react'
import axios from 'axios'

const RandomMath = () => {
    const [fact, setMathFact] = useState({
        mathFact: ''
    })
   

    const generateMathFact = () => {
        axios.get('http://numbersapi.com/random/math').then(res => {
            setMathFact({
                mathFact: res.data
            })
        })
    }

    return (
        <div className='random-math-container'>
            <button onClick={generateMathFact}>Generate Random Math Fact</button>
            <div>
                {fact.mathFact}
            </div>
        </div>
    )


}

export default RandomMath