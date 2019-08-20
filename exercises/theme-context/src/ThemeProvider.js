// import React from 'react'

// const {Consumer, Provider} = React.createContext()

// class ThemeProvider extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             theme: 'dark',
//             name: 'coolio',
//             on: false
//         }
//     }

// toggle = () => {
//     this.setState(prevState => {
//         return {
//             on: !prevState.on
//         }
//     })
// }


// render(){
//     return(
//         <Provider value={{...this.state, toggle: this.toggle}}>
//             {this.props.children}
//         </Provider>
//     )
// }

// }

// export default ThemeProvider

// export const withTheme = (Component) => {
//     return(props) => <Consumer>
//                         {value => <Component {...value}{...props}/>}
//                     </Consumer>
// }


import React from 'react'

const {Consumer, Provider} = React.createContext()

class ThemeProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            name: 'coolio',
            on: false,
        }
    }

toggle = () => {
    this.setState(prevState => {
        return {
            on: !prevState.on
        }
    })
}

    render(){
        return(
            <Provider value={{...this.state, toggle: this.toggle}}>
                {this.props.children}
            </Provider>
        )
    }


}

export default ThemeProvider

export const withTheme = (Comp) => {
    return(props) => <Consumer>
                            {value => <Comp {...value}{...props}/>}
                    </Consumer>
}