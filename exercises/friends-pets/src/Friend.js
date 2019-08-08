import React from 'react'
import Pet from './Pet'


const Friend = (props) => {
    const petsMapped = props.pets.map((pet, i) => <Pet key={i} name={pet.name}/>)
    return (
        <div>
            <h1>Name: {props.name}</h1>
            {petsMapped}
        </div>
        
    )
}

export default Friend


