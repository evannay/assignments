// import React from 'react'
// import Pet from './Pet'


// const Friend = (props) => {
//     const petsMapped = props.pets.map((pet, i) => <Pet key={i} name={pet.name}/>)
//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             {petsMapped}
//         </div>
        
//     )
// }

// export default Friend

import React from 'react'
import Pet from './Pet'

const Friend = (props) => {
    const petsMapped = props.pets.map((pets, i) =>
    <Pet 
    key={i}
    name={pets.name}
    />)
    return (
        <div className='test-container'>
            <h1>{props.name}</h1>
            <h2>Pet Names: {petsMapped}</h2>
        </div>
        
    )
}

export default Friend

