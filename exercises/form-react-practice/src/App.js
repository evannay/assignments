// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             fName: '',
//             lName: '',
//             names: ['Evan']

//         }
//     }

//     handleChange = (event) => {
//         console.log(event.target)
        // const target = event.target
        // const name = target.name
        // const value = target.value
        // console.log(name, value)

//         const {name, value} = event.target

//         this.setState({
//             [name] : value
//         })
//     }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     let {fName, lName} = this.state
    //     const newName = `${fName} ${lName}`
    //     this.setState(prevState => {
    //         return { 
    //             names : [...prevState.names, newName],
    //             fName: '',
    //             lName: ''
    //         }
    //     })

    // }

//     render(){
//         const mappedNames = this.state.names.map((name, i) => {
//             return (
//                 <h1 key = {i}>{name}</h1>
//             )
//         })
//         return(
//             <div>
//                 <form onSubmit = {this.handleSubmit}>
//                     <input type='text' placeholder='First Name' name='fName' onChange={this.handleChange} value={this.state.fName}></input>
//                     <input type='text' placeholder='Last Name' name='lName' onChange ={this.handleChange} value={this.state.lName}></input>
//                     <button>Submit</button>
//                 </form>
//                 { mappedNames }
//             </div>
//         )
//     }
// }

// export default App


















// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             fName: '',
//             lName: '',
//             names: []
//         }
//     }
//     handleChange = (event) => {
//         let {name, value} = event.target
//         this.setState({[name] : value})
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         let {fName, lName} = this.state
//         const newName = `${fName} ${lName}`
//         this.setState(prevState => {
//             return {
//                 names: [...prevState.names, newName]
//             }
//         })

//     }


//     render(){
//         const namesMapped = this.state.names.map((name,i) => {
//             return (
//                 <div key={i}>{name}</div>
//             )
//         })
//         return(
//             <div>
//                 <form onClick={this.handleSubmit}>
//                     <input input='text' placeholder='First Name' value={this.state.fName} name='fName' onChange={this.handleChange}></input>
//                     <input input='text' placeholder='Last Name' value={this.state.lName} name='lName' onChange={this.handleChange}></input>
//                     <button>Submit</button>
//                 </form>
//                 { namesMapped }
//             </div>
            
//         )
//     }
// }

// export default App


// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             fName : '',
//             lName : '',
//             names : []

//         }
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         const newName = this.state.fName + ' ' + this.state.lName
//         this.setState(prevState => {
//             return {
//                 names: [...prevState.names, newName]
//             }
//         })
//     }


//     render(){
//         const mappedNames = this.state.names.map((name, i) => {
//             return (
//                 <div>
//                     <h1 key={i}>{name}</h1>
//                 </div>
//             )
//         })
//         return(
//             <div>
//                 <form onClick={this.handleSubmit}>
//                     <input type='text' name='fName' value={this.state.fName} placeholder='First Name' onChange={this.handleChange}></input>
//                     <input type='text' name='lName' value={this.state.lName} placeholder='Last Name' onChange={this.handleChange}></input>
//                     <button>Submit</button>
//                 </form>
//                 { mappedNames }
//             </div>
//         )
//     }
// }



// export default App


// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             fName: '',
//             lName: '',
//             names: []
//         }
//     }


//     handleChange = (event) => {
//         this.setState({
//             [event.target.name] : event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         const newName = this.state.fName + ' ' + this.state.lName
//         this.setState(prevState => {
//             return {
//                 names : [...prevState.names, newName]
//             }
//         })
//     }

//     render(){
//         const mappedNames = this.state.names.map((name, i) => {
//             return (
//                 <h1 key={i}>{name}</h1>
//             )
//         })
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type='text' name='fName' value={this.state.fName} placeholder='First Name' onChange={this.handleChange}></input>
//                     <input type='text' name='lName' value={this.state.lName} placeholder='Last Name' onChange={this.handleChange}></input>
//                     <button>Submit</button>
//                 </form>
                
//                 { mappedNames }
//             </div>
            
//         )

//     }
// }

// export default App


import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            names: []
        }
    }

handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    })
}
handleSubmit = (event) => {
    event.preventDefault()
    const newName = this.state.fName + ' ' + this.state.lName
    this.setState(prevState => {
        return {
            names : [...prevState.names, newName]
        }
    })
}





    render(){
        const mappedNames = this.state.names.map((name, i) => {
            return (
                <h1 key={i}>{name}</h1>
            )
        })

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='fName' value={this.state.fName} placeholder='First Name' onChange={this.handleChange}></input>
                    <input type='text' name='lName' value={this.state.lName} placeholder='Last Name' onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
                { mappedNames }
            </div>
            
        )
    }
}


export default App
