import React from 'react'

import axios from 'axios'

import Todo from './Todo'


class TodoContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            price: '',
            imgUrl: '',
            todos:[]
        }
    }


    componentDidMount(){
        axios.get('https://api.vschool.io/evan/todo/').then(res => {
            this.setState({
                todos: res.data
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {title, description, price, imgUrl} = this.state
        const todoObject = {
            title: title,
            description: description,
            price: price,
            imgUrl: imgUrl
        }
        axios.post('https://api.vschool.io/evan/todo/', todoObject).then(res => {
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, todoObject]
                }
            })
        })
    }


    deleteTodo = (id) => {
        axios.delete(`https://api.vschool.io/evan/todo/${id}`).then(
            console.log('deleted')
        )
        this.setState(prevState => {
            const updatedTodos = prevState.todos.filter(todo => {
                return todo._id !== id
            })
                return {todos: updatedTodos}
        })
        
    }








    render(){
        const mappedTodos = this.state.todos.map((todo, i) =>{
            return(
                <Todo 
                key={todo._id}
                id={todo._id}
                title={todo.title}
                description={todo.description}
                price={todo.price}
                imgUrl={todo.imgUrl}
                deleteFunction={this.deleteTodo}
                />
                
            )
        })
        return(
            <>
                <form className='form-container' onSubmit={this.handleSubmit}>
                    <input name='title' placeholder='Title' value={this.state.title} onChange={this.handleChange} type='text' required />
                    <input name='description' placeholder='Description' value={this.state.description} onChange={this.handleChange} type='text' required />
                    <input name='price' placeholder='Price' value={this.state.price} onChange={this.handleChange} type='number' />
                    <input name='imgUrl' placeholder='Image Url' value={this.state.imgUrl} onChange={this.handleChange} type='text' />
                    <button>Submit</button>
                </form>
                <div className='todos-container'>
                    {mappedTodos}
                </div>
            </>
        )
    }
}

export default TodoContainer