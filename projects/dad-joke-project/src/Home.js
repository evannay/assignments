import React from 'react'

import axios from 'axios'

import Joke from './Joke.js'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            jokes: [],
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
                jokes: [res.data]
            })
        })
        
    }

    render(){
        const mappedJokes = this.state.jokes.map(joke => {
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
                    <button className='generate-button' onClick={this.generateJoke}>Random Dad Joke</button>
                    <>
                        { mappedJokes }
                    </>
                </div>  
            </div>
        )
    }
} 

export default Home