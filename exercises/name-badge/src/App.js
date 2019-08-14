// import React from 'react'
// import Badge from './Badge'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             fName: '',
//             lName: '',
//             placeOfBirth: '',
//             phone: '',
//             favoriteFood: '',
//             email: '',
//             aboutYourself: '',
//             badges: []
//         }
//     }


//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         const person = {
//             fullName: this.state.fName + ' ' + this.state.lName,
//             placeOfBirth: this.state.placeOfBirth,
//             email: this.state.email,
//             phone: this.state.phone,
//             favoriteFood: this.state.favoriteFood,
//             aboutYourself: this.state.aboutYourself
//         }
//         this.setState(prevState => {
//             return {
//                 badges: [...prevState.badges, person]
//             }
//         })
//     }

//     render(){
//         const mappedBadges = this.state.badges.map((person, i) => {
//             return (
//                 <Badge 
//                 key={i}
//                 fullName={person.fullName}
//                 placeOfBirth={person.placeOfBirth}
//                 email={person.email}
//                 phone={person.phone}
//                 favoriteFood={person.favoriteFood}
//                 aboutYourself={person.aboutYourself}
//                   />
//             )
//         })
//         return(
//             <div className='app-container'>
//                 <form className='form-container' onSubmit={this.handleSubmit}>
//                     <input required className='fName' placeholder='First Name' name='fName' value={this.state.fName} onChange={this.handleChange}></input>
//                     <input required className='lName' placeholder='Last Name' name='lName' value={this.state.lName} onChange={this.handleChange}></input>
//                     <input required className='email' placeholder='email' name='email' value={this.state.email} onChange={this.handleChange}></input>
//                     <input required className='place-of-birth' placeholder='Place of Birth' name='placeOfBirth' value={this.state.placeOfBirth} onChange={this.handleChange}></input>
//                     <input required className='phone' placeholder='Phone Number' name='phone' value={this.state.phone} onChange={this.handleChange}></input>
//                     <input required className='favorite-food' placeholder='Favorite Food' name='favoriteFood' value={this.state.favoriteFood} onChange={this.handleChange}></input>
//                     <textarea required className='about-yourself' placeholder='Tell us about yourself . . .' name='aboutYourself' value={this.state.aboutYourself} onChange={this.handleChange}></textarea>
//                     <button className='button'>Submit</button>
//                 </form>
//                 <br></br>
//                 { mappedBadges }
//             </div>
//         )
//     }
// }

// export default App

import React from 'react'
import './App.css'
import Badge from './Badge.js'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            fName : '',
            lName : '',
            email : '',
            phone : '',
            birthplace : '',
            favFood : '',
            aboutSelf : '',
            badges: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const person = {
            fullName: this.state.fName + ' ' + this.state.lName,
            phone: this.state.phone,
            email: this.state.email,
            birthplace: this.state.birthplace,
            favFood: this.state.favFood,
            aboutSelf: this.state.aboutSelf
        }
        this.setState(prevState => {
            return{
                badges: [...prevState.badges, person]
            }
        })
    }

    render(){
        const mappedBadges = this.state.badges.map((person, i) => {
            return (
                <Badge 
                key={i}
                fullName={person.fullName}
                phone={person.phone}
                email={person.email}
                birthplace={person.birthplace}
                favFood={person.favFood}
                aboutSelf={person.aboutSelf}
                />
            )
        })
        return(
            <div className='app-container'>
                <form className='form-container' onSubmit={this.handleSubmit}>
                    <input placeholder='First Name' name='fName' value={this.state.fName} onChange={this.handleChange}></input>
                    <input placeholder='Last Name' name='lName' value={this.state.lName} onChange={this.handleChange}></input>
                    <input placeholder='Phone Number' name='phone' value={this.state.phone} onChange={this.handleChange}></input>
                    <input placeholder='Email Address' name='email' value={this.state.email} onChange={this.handleChange}></input>
                    <input placeholder='Place of Birth' name='birthplace' value={this.state.birthplace} onChange={this.handleChange}></input>
                    <input placeholder='Favorite Food' name='favFood' value={this.state.favFood} onChange={this.handleChange}></input>
                    <textarea className='about-self' placeholder='Tell us a litte about yourself . . . ' name='aboutSelf' value={this.state.aboutSelf} onChange={this.handleChange}></textarea>
                    <button className='button'>Submit</button>
                </form>
                <br></br>
                { mappedBadges }
            </div>
        )
    }
}

export default App