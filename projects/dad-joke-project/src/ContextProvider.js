import React from 'react'

import {Provider, Consumer} from React.createContext()


class ContextProvider extends React.Component{
    constructor(){
        super()
        this.state = { 
            savedJokes: []
        }
    }

    saveJoke = () => {
        
    }


render(){
    <Provider value={{
        ...this.state
    }}>
        {this.props.children}
    </Provider>
}

}

export default ContextProvider