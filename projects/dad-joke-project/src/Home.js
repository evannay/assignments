import React from 'react'

import axios from 'axios'

import Joke from './Joke.js'
import { withProvider } from './ContextProvider.js'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            jokes: [],
            isSaved: false
        }
    }

    generateJoke = (event) => {
        event.preventDefault()
        const configHeader = {
            headers :{ Accept: 'application/json' }
        }
        axios.get('https://icanhazdadjoke.com/', configHeader).then(res => {
            console.log(res.data)
            this.setState({
                jokes: [res.data],
                isSaved: false
            })
        })
        
    }

    render(){
        const mappedJokes = this.props.jokes.map(joke => {
            return(
                <Joke
                key={joke.id}
                joke={joke.joke} 
                />
            )
        })
        return(
            <div className='home-container'>
                <div className='generator-container'>
                    <button className='generate-button' onClick={this.props.generateJoke}>Generate</button>
                    <div className='joke-container'>
                        { mappedJokes }
                    </div>
                </div>  
            </div>
        )
    }
} 

export default withProvider(Home)