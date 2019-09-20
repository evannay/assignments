import React from 'react'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input onChange={this.handleChange} type='text' placeholder='username'/>
                    <input onChange={this.handleChange} type='text' placeholder='password'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login