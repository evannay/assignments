import React from 'react'

const Todo = (props) => {



    return (
        <div className='todo-container'>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <img src={props.imgUrl} alt=''></img>
            <button onClick={() => props.deleteFunction(props.id)}>Delete</button>
            <h3>{props.price}</h3>
        </div>
    )
}

export default Todo