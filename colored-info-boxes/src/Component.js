import React from 'react'
import './App.css'

const Component = (props) => {
    let {backgroundColor, title, subtitle, info} = props
    const styles = {
        backgroundColor 
    }
    return(
        <div className='test-box' style={styles}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h6>{info}</h6>
        </div>
    )
}

export default Component