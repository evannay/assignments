import React from 'react'

const Person = (props) => {

    return (
        <div className='hitList-container'>
            <div className='image-container' style={{backgroundImage: `url(${props.image})`}}>
            {props.name}
            </div>
        </div>
    )
}


export default Person

// import React from 'react'

// class Person extends React.Component{
//    constructor(){
//        super()
//        this.state={
//            display: 'block',
//            strike: 'lineThrough'
//        }
//    }
//    handleClick= (e) =>{
//       e.preventDefault()
//        this.setState({
//            display: 'none',
//            strike: 'lineThrough red'
//        })
//    }

//    render(props){
//    return(
//        <div className='personContainer'>
//            <h1 onClick={this.handleClick} style={{textDecoration: this.state.strike}} name='strike'>{this.props.name}</h1>
//            <img className='hov' src={this.props.image} style={this.state}></img>
//        </div>
//    )
//    }
// }


// export default Person