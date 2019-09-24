import React from 'react'

const Appointment = (props) => {
    return(
        <div>
            <h3>{props.appointment.name}</h3>
            <h5>{props.appointment.description}</h5>
            <h5>{props.appointment.date}</h5>
            <h5>{props.appointment.time}</h5>
            <button onClick={() => props.deleteAppointment(props.appointment._id)}>Delete</button>
        </div>
    )
}

export default Appointment