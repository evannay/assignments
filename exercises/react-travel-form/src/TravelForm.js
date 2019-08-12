import React from 'react'

class TravelForm extends React.Component{
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            age: '',
            gender: '',
            value: 'Tahiti',
            diet: [],
            people: []
        }
    }

    handleChange = (event) => {
        console.log(event.target.type)
            if(event.target.type === 'select-one'){
                this.setState({
                    value: event.target.value
                })
            }else {
                this.setState({
                    [event.target.name] : event.target.value
                })
        }
                 
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const newName = this.state.fName + ' ' + this.state.lName
        const age = this.state.age
        const gender = this.state.gender
        const location = this.state.value
        this.setState(prevState => {
            return {
                people: [...prevState.people, newName, age, gender, location]
            }
        })
    }


    render(){
        const mappedPeople = this.state.people.map((person, i) =>{ 
            return (
                <div key={i}>
                    <h1>{person}</h1>
                </div>
            )
        })
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='First Name' type='text' name='fName' value={this.state.fName} onChange={this.handleChange}></input>
                <input placeholder='Last Name' type='text' name='lName' value={this.state.lName} onChange={this.handleChange}></input>
                <input placeholder='Age' type='number' name='age' value={this.state.age} onChange={this.handleChange}></input>
                <input type='radio' value='Male' name='gender' onChange={this.handleChange}></input>Male
                <input type='radio' value='Female' name='gender' onChange={this.handleChange}></input>Female
                <br></br>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='Tahiti'>Tahiti</option>
                    <option value='Jamaica'>Jamaica</option>
                    <option value='Area 51'>Area 51</option>
                </select>
                <input type='checkbox' name='diet' value='Dairy Free'></input>Dairy Free
                <input type='checkbox' name='diet' value='Vegan'></input>Vegan
                <input type='checkbox' name='diet' value='Carnivore'></input>Carnivore
                <br></br>
                <button>Submit</button>
                { mappedPeople }
            </form>

        )
    }
}

export default TravelForm