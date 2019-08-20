import React from 'react'

import { withTodos } from './TodoProvider'

class Form extends React.Component{
    constructor() {
        super()
        this.state =  {
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        }
    }


    handleChange = (event) => {
        this.setState({
           [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            title: '',
            description: '',
            price: '',
            imgUrl: ''
        })
    }

    render(){
        return(
            <form className='form-container' onSubmit={this.handleSubmit}>
                <input name='title' value={this.state.title} placeholder='Title' onChange={this.handleChange} required type="text"/>
                <input name='description' value={this.state.description} placeholder='Description' onChange={this.handleChange} required type="text"/>
                <input name='price' value={this.state.price} placeholder='Price' onChange={this.handleChange} type="number"/>
                <input name='imgUrl' value={this.state.imgUrl} placeholder='Image URL' onChange={this.handleChange} type="text"/>
                <button>Submit</button>
            </form>
        )
    }
}

export default withTodos(Form)
