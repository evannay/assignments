// import React from 'react'

// class TravelForm extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             fName: '',
//             lName: '',
//             age: '',
//             gender: '',
//             value: 'Tahiti',
//             diet: [],
//             people: []
//         }
//     }

//     handleChange = (event) => {
//         console.log(event.target.type)
//             if(event.target.type === 'select-one'){
//                 this.setState({
//                     value: event.target.value
//                 })
//             }else {
//                 this.setState({
//                     [event.target.name] : event.target.value
//                 })
//         }
                 
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         const newName = this.state.fName + ' ' + this.state.lName
//         const age = this.state.age
//         const gender = this.state.gender
//         const location = this.state.value
//         this.setState(prevState => {
//             return {
//                 people: [...prevState.people, newName, age, gender, location]
//             }
//         })
//     }


//     render(){
//         const mappedPeople = this.state.people.map((person, i) =>{ 
//             return (
//                 <div key={i}>
//                     <h1>{person}</h1>
//                 </div>
//             )
//         })
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input placeholder='First Name' type='text' name='fName' value={this.state.fName} onChange={this.handleChange}></input>
//                 <input placeholder='Last Name' type='text' name='lName' value={this.state.lName} onChange={this.handleChange}></input>
//                 <input placeholder='Age' type='number' name='age' value={this.state.age} onChange={this.handleChange}></input>
//                 <input type='radio' value='Male' name='gender' onChange={this.handleChange}></input>Male
//                 <input type='radio' value='Female' name='gender' onChange={this.handleChange}></input>Female
//                 <br></br>
//                 <select value={this.state.value} onChange={this.handleChange}>
//                     <option value='Tahiti'>Tahiti</option>
//                     <option value='Jamaica'>Jamaica</option>
//                     <option value='Area 51'>Area 51</option>
//                 </select>
//                 <input type='checkbox' name='diet' value='Dairy Free'></input>Dairy Free
//                 <input type='checkbox' name='diet' value='Vegan'></input>Vegan
//                 <input type='checkbox' name='diet' value='Carnivore'></input>Carnivore
//                 <br></br>
//                 <button>Submit</button>
//                 { mappedPeople }
//             </form>

//         )
//     }
// }

// export default TravelForm

import React from 'react'


class TravelForm extends React.Component{
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            age: '',
            gender: '',
            value: 'Area 51',
            diet: [],
            tickets: []
        }
    }

    handleChange = (event) => {
        let {name, value, type} = event.target
        if(name === 'diet'){
            const dietArr = [...this.state.diet]
                 if(dietArr.includes(value)){
                    dietArr.splice(dietArr.indexOf(value), 1)
                } else {
                    dietArr.push(value)
            }
            this.setState({
                
            })
        }
        
    }




    render(){
        return(
            <form className='form-container'>
                <input type='text' placeholder='First Name' name='fName' value={this.state.fName}></input>
                <input type='text' placeholder='Last Name'name='lName' value={this.state.lName}></input>
                <input type='number' placeholder='Age' name='age' value={this.state.age}></input>
                <input type='radio' name='gender' value='Male'></input>Male
                <input type='radio' name='gender' value='Female'></input>Female
                <select value={this.state.value}>
                    <option value='Area 51'>Area 51</option>
                    <option value='Taylorsville, UT'>Taylorsville, UT</option>
                    <option value='Tahiti'>Tahiti</option>
                </select>
                <input type='checkbox' name='diet' value='Dairy Free'></input>Dairy Free
                <input type='checkbox' name='diet' value='Vegan'></input>Vegan
                <input type='checkbox' name='diet' value='Carnivore'></input>Carnivore
            </form>
        )
    }
}

export default TravelForm