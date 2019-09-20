import React from 'react'
import axios from 'axios'

const {Provider, Consumer} = React.createContext()

class AuthContext extends React.Component {
    constructor(){
        super()
        this.state = {
            appointments: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ''
        }
    }


    signup = (userInfo) => {
        return axios.post('/auth/signup', userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user, 
                    token
                })
                return response
            })
    }

    login = (credentials) => {
        return axios.post("/auth/login", credentials)
        .then(response => {
            const { token, user } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user,
                token
            })
            return response
        })
    }

    getAppointments = () => {
        axios.get("/api/appointments")
            .then(response => {
                console.log(response.data)
            })
    }



    render() {
        return(
            <Provider value={{
                signup: this.signup,
                login: this.login,
                getAppointments: this.getAppointments,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default AuthContext

export const withAuth = C => props => <Consumer>
                                    {value => <C {...value}{...props} />}
                                        </Consumer>