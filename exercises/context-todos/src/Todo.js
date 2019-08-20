import React from 'react'
import { withTodos } from './TodoProvider'

const Todo = (props) => {
    return(
        <div className='todo-container'>
            <h1>{props.todo.title}</h1>
            <h4>{props.todo.description}</h4>
            <h4>{props.todo.price}</h4>
            <img alt='' src={props.todo.imgUrl} />
            <button onClick={() => props.deleteTodo(props.todo._id)}>Delete</button>
        </div>
    )
}

export default withTodos(Todo) 
