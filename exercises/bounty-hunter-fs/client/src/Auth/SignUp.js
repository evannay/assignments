import React from 'react'

class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    clearInputs = () => {
        this.setState({
            username: '',
            password: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleChange}>
                    <h3>Sign Up</h3>
                    <input onChange={this.handleChange} placeholder='username' />
                    <input onChange={this.handleChange} placeholder='password' />
                    <button type='submit'>Create Account</button>
                </form>
            </div>
        )
    }
}

export default SignUp