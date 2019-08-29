import React from 'react'

import Joke from './Joke.js'
import { withProvider } from './ContextProvider.js'

const Home = (props) => {
    return(
        <div className='home-container'>
            <div className='generator-container'>
                <button className='generate-button' onClick={props.generateJoke}>Generate</button>
                <div className='joke-container'>
                    <Joke />
                </div>
            </div>  
        </div>
    )
}

export default withProvider(Home);
