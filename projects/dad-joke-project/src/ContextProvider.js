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
            joke: ''
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
            console.log(this.state.darkTheme)
            return {
                darkTheme: !prevState.darkTheme
            }
        })
    }


    generateJoke = () => {
        const configHeader = {
            headers : { Accept: 'application/json' }
        }
        axios.get('https://icanhazdadjoke.com/', configHeader).then(res => {
            console.log(res.data)
            this.setState({
                joke: res.data.joke,
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