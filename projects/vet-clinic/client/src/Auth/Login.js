import React from 'react'
import {withAuth} from '../AuthContext'


class Login extends React.Component {
    constructor(props){
        super()
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name] : value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
            .then(() => this.props.history.push('/appointments'))
            .catch(err => {
                this.setState({
                    errorMessage: err.response.data.message
                })
            })
    }




    render() {
        return(
            <div className='login-form-container' onSubmit={this.handleSubmit}>
                <form>
                    <div>
                        <input type="text" name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                            <input type="text" name='password' placeholder='Password' value={this.state.password} onChange ={this.handleChange}/>
                            <button>Login</button>
                    </div>
                </form>

                {
                    this.state.errorMessage && 
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }

            </div>
        )
    }
}

export default withAuth(Login)