import React from 'react'
import axios from 'axios'
const appointmentAxios = axios.create()

appointmentAxios.interceptors.request.use((config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
}))

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
        return appointmentAxios.post('/auth/signup', userInfo)
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
        return appointmentAxios.post("/auth/login", credentials)
        .then(response => {
            const { token, user } = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user,
                token
            })
            this.getAppointments()
            return response
        })
    }

    getAppointments = () => {
        appointmentAxios.get("/api/appointments")
            .then(response => {
                this.setState({
                    appointments: response.data
                })
                return response
            })
    }

    logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        this.setState({
            todos: [],
            user: {},
            token: ''
        })
    }

    addApointment = (newAppointment) => {
        return appointmentAxios.post('/api/appointments', newAppointment)
            .then(response => {
                this.setState(prevState => {
                    return { appointments: [...prevState.appointments, response.data] }
                })
                return response
            })
    }


    render() {
        return(
            <Provider value={{
                signup: this.signup,
                login: this.login,
                getAppointments: this.getAppointments,
                logout: this.logout,
                addAppointment: this.addApointment,
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