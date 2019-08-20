import React from 'react'

import { withTodos } from './TodoProvider.js'
import Todo from './Todo.js'

class TodoContainer extends React.Component{
    constructor(){
        super()
    }


    componentDidMount(){
        this.props.getTodos()
    }

    render(){
        const mappedTodos = this.props.todos.map(todo => {
            return(
                <Todo
                todo={todo}
                key={todo._id} 
                />
            )
        })
        return(
            <div className='todos-container'>
                {mappedTodos}
            </div>
        )
    }
} 

export default withTodos(TodoContainer)
