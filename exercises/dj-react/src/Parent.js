// import React from 'react'
// import Square from './Square.js'

// class Parent extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             squares: ['white', 'white', 'white', 'white']
//         }
//     }
// smallTimeDj = () =>{
//     if(this.state.squares[0] === 'white'){
//         this.setState({squares: ['black', 'black', 'black', 'black']})
//     }else {
//         this.setState({squares: ['white', 'white', 'white', 'white'] })
//     }
// }

// partyDj = () =>{
//     this.setState({squares: ['purple', 'purple', 'white', 'white'] })
// }

// professionalDj1 = () => {
//     this.setState({squares: ['white', 'white', 'blue', 'white']})
// }

// professionalDj2 = () => {
//     this.setState({squares: ['white', 'white', 'white', 'blue']})
// }




//     render(){
//         const squaresMapped = this.state.squares.map((square, i) => <Square style={{background:square}} key={i} />)
//         return(
//             <div className='container'>
//                 { squaresMapped }
//                 <button onClick={this.smallTimeDj}>Small Time DJ</button>
//                 <button onClick={this.partyDj}> Party DJ</button>
//                 <button onClick={this.professionalDj1}> Pro DJ BR</button>
//                 <button onClick={this.professionalDj2}>Pro DJ BL</button>
//             </div>
//         )
//     }
// }

// export default Parent


import React from 'react'
import Square from './Square'

class Parent extends React.Component{
    constructor(){
        super()
        this.state = {
            squares: ['white', 'white', 'white', 'white']
        }
    }
smallTimeDj = () => {
    if(this.state.squares[0] === 'white'){
        this.setState({squares: ['black', 'black', 'black', 'black'] })
    }else {
        this.setState({squares: ['white', 'white', 'white', 'white']})
    }
}

partyDj = () => {
    this.setState({squares: ['blue', 'blue', 'white', 'white']})
}





render(){
    const mappedSquares = this.state.squares.map((square, i) => <Square key={i} style={{background:square}}/> )
    return(
        <div className='container'>
            { mappedSquares }
            <button onClick={this.smallTimeDj}> Small Time DJ</button>
            <button onClick={this.partyDj}>Party DJ</button>
        </div>
        
    )
}
}

export default Parent