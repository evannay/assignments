import React from 'react'

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            bountyPayout: '',
            type: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render(){
        return(
            <form className='form-container' onSubmit={this.handleSubmit}>
                <input type="text" placeholder='First Name' name='firstName' onChange={this.handleChange}/>
                <input type="text" placeholder='Last Name' name='lastName' onChange={this.handleChange}/>
                <input type="number" placeholder='Bounty Payout' name='bountyPayout' onChange={this.handleChange}/>
                <input type='radio' name='type' />Sith
                <input type='radio' name='type' />Jedi
            </form>
        )
    }
}

export default Form