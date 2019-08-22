import React from 'react'

import axios from 'axios'

const {Provider, Consumer} = React.createContext()



class ContextProvider extends React.Component{
    constructor(){
        super()
        this.state = { 
            savedJokes: JSON.parse(localStorage.getItem('savedFavorites')) || [],
            isSaved: false,
            darkTheme: false,
            jokes: []
        }
    }

    saveJoke = (newFav) => {
        const included = this.state.savedJokes.every(joke => joke !== newFav)
        if(included){
            this.setState(prevState =>{
                return{
                    savedJokes:[newFav,...prevState.savedJokes], 
                    isSaved: true
                } 
            }, () => {
                localStorage.setItem("savedFavorites", JSON.stringify(this.state.savedJokes))
            }) 
        }
    }
    
    themeChange = () => {
        this.setState(prevState => {
            return {
                darkTheme: !prevState.darkTheme
            }
        })
    }


    generateJoke = (event) => {
        event.preventDefault()
        const configHeader = {
            headers : { Accept: 'application/json' }
        }
        axios.get('https://icanhazdadjoke.com/', configHeader).then(res => {
            this.setState({
                jokes: [res.data],
                isSaved: false
            })
        })
        
    }

    deleteFavorite = (myJoke) =>{
        this.setState(prev => {
            return {
                savedJokes: prev.savedJokes.filter(joke => joke !== myJoke),
                isSaved: false
            }
        }, () => {
            localStorage.setItem("savedFavorites", JSON.stringify(this.state.savedJokes))
        })
    }




render(){
    return(
        <Provider value={{
            ...this.state,
            saveJoke: this.saveJoke,
            themeChange: this.themeChange,
            generateJoke: this.generateJoke,
            deleteFavorite: this.deleteFavorite
        }}>
            {this.props.children}
        </Provider>
    )    
}

}

export default ContextProvider

export const withProvider = C => props => <Consumer>
                                                {value => <C {...value}{...props} />}
                                            </Consumer>