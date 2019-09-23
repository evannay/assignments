import React from 'react'
import {withAuth} from '../AuthContext'


class SignUp extends React.Component {
    constructor(props){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault()
        this.props.signup(this.state)
            .then(() => this.props.history.push('/appointments'))
    }

    render(props){
        return (
            <div className='signup-form-container'>
                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        <div className='signup-inputs'>
                            <input type='text' placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange}/>
                            <input type='text' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}/>
                            <button>Create Account</button>
                        </div>
                    </form>
                </div>
        )
    }
}

export default withAuth(SignUp)