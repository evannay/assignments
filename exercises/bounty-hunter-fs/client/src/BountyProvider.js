import React from 'react'
const { Provider, Consumer } = React.createContext()


class BountyProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            bounties: [],
            user: {},
            token: ''
        }
    }


    render(){
        return (
            <Provider value={{
                ...this.state
            }}>
            {this.props.children}
            </Provider>
        )
    }
}

export default BountyProvider

export const withContext = C => props => <Consumer>
                            {value => <C {...value}{...props} />}         
                                        </Consumer>