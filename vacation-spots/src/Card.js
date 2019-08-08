// import React from 'react'

// const Card = (props) => {
//     return (
//         <div>
//             <h1>Location: {props.place}</h1>
//             <h3>Price: {props.price}</h3>
//             <h5>Best Season: {props.timeToGo}</h5>
//         </div>
//     )
// }

// export default Card


// import React from 'react'

// const Card = (props) => {
//     return(
//         <div>
//             <h1>Location: {props.place} </h1>
//             <h2>Price: {props.price}</h2>
//             <h4>Best Season: {props.timeToGo}</h4>
//         </div>
//     )
// }

// export default Card

import React from 'react'
import { tsInferType } from '@babel/types';

const Card = (props) => {
    return (
        <div className='page-container'>
            <div className='card-container'>
                <h1>Place: {props.place}</h1>
                <div className='card-info-container'>
                    <h4>Price: {props.price}</h4>
                    <h4>Season: {props.timeToGo}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card