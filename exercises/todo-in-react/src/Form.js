import React from 'react'
import axios from 'axios';

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://api.vschool.io/evan/todo/', this.state).then(res => {
            
        })
    }

    render(){
        return(
            <form className='form-container' onSubmit={this.handleSubmit}>
                <input name='title' placeholder='Title' value={this.state.title} onChange={this.handleChange} type='text' required />
                <input name='description' placeholder='Description' value={this.state.description} onChange={this.handleChange} type='text' required />
                <input name='price' placeholder='Price' value={this.state.price} onChange={this.handleChange} type='number' />
                <input name='imgUrl' placeholder='Image Url' value={this.state.imgUrl} onChange={this.handleChange} type='text' />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form