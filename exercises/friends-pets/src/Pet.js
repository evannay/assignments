// import React from 'react'

// const Pet = (props) => {
//     return (
//         <div>
//             <h4>Pet Names: {props.name}</h4>
//         </div>
//     )
// }

// export default Pet

import React from 'react'

class Pet extends React.Component{
    constructor(){
        super()
        
    }
 render(props){
    return (
        <div>
            <h5>{this.props.name}</h5>
        </div>
    )
    }
}

export default Pet

