import React from 'react'

import axios from 'axios'

import Header from './Header.js'
import Person from './Person.js'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            hitList: []
        }
    }


    componentDidMount(){
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
            this.setState({hitList: response.data})
        })
    }


    render(){

        const mappedHitList = this.state.hitList.map((person, i) => {
            return (
                <Person 
                key ={i}
                name = {person.name}
                image = {person.image}
                />
            )
        })
        return(
            <div>
                <Header />
                <div className='map-container'>
                    { mappedHitList }
                </div>
            </div>
        )
    }




}

export default App