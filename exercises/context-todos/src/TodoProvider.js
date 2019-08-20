import React from 'react'
import axios from 'axios'


const { Provider, Consumer} = React.createContext()

class TodoProvider extends React.Component {
    constructor(){
        super()
        this.state ={
            todos: []
        }
    }

    getTodos = () => {
        axios.get(' https://api.vschool.io/evan/todo/').then(res => {
            this.setState({
                todos: res.data
            })
        })
    }

    handleSubmit = (todoObject) =>{
        
        axios.post('https://api.vschool.io/evan/todo/', todoObject).then(res =>{
            this.setState(prevState => {
                return {
                    todos: [todoObject, ...prevState.todos]
                }
            })
        })
    }

    deleteTodo = id => {
        axios.delete(`https://api.vschool.io/evan/todo/${id}`)
        this.setState(prev => {
            const updatedTodos = prev.todos.filter(todo => {
                return todo._id !== id
            })
            return {
                todos: updatedTodos
            }
        })
    }


    render(){
        return(
            <Provider value={{
                ...this.state,
                getTodos: this.getTodos,
                handleSubmit: this.handleSubmit,
                deleteTodo: this.deleteTodo
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default TodoProvider

export const withTodos = C => props => <Consumer>
                                    {value => <C {...value}{...props} />}
                                    </Consumer>
