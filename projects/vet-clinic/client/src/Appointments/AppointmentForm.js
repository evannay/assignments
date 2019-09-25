import React from 'react'
import { withAuth } from '../AuthContext'


class AppointmentForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            description: '',
            date: '',
            time: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState ({
            [name] : value
        })
    }

    clearInputs = () => {
        this.setState({
            name: '',
            description: '',
            date: '',
            time: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addAppointment(this.state)
            .then(response => {
                this.clearInputs()
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='add-appointment-form'>
                    <input type="text" placeholder='Title' value={this.state.name} name ='name' onChange={this.handleChange}/>
                    <input type="text" placeholder='Description' value={this.state.description} name ='description' onChange={this.handleChange}/>
                    <input type="text" placeholder='Date (DD/MM/YYYY)' value={this.state.date} name ='date' onChange={this.handleChange}/>
                    <input type="text" placeholder='Time' value={this.state.time} name ='time' onChange={this.handleChange}/>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default withAuth(AppointmentForm)