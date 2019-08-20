import React from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';


class Characters extends React.Component{
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/people/').then(response => {
            console.log(response.data)
            this.setState({
                characters: response.data.results
            })
        })
    }

    render(){
        const mappedCharacters = this.state.characters.map((character, i) =>{
            return(
                <Link
                key={i}
                name={character.name}
                to={`/character/${character.name}`}
                >{character.name}</Link>
            )
        })

        return(
            <div className='characters-container'>
                { mappedCharacters }
            </div>
        )
    }
}

export default Characters