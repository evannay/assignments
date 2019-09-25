import React, {useState} from 'react'
import { withAuth } from '../AuthContext'


const Appointment = (props) => {
    let {name, description, date, time} = props.appointment
    const [isEditing, setIsEditing] = useState(false)
    const [inputs, setInputs] = useState({
                                            name,
                                            description,
                                            date,
                                            time    
    })

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return(
        <div className='appointment-container'>
            {
                !isEditing ?
            
            <React.Fragment>
                <h3>{props.appointment.name}</h3>
                <h5>{props.appointment.description}</h5>
                <h5>{props.appointment.date}</h5>
                <h5>{props.appointment.time}</h5>
                <button onClick={() => props.deleteAppointment(props.appointment._id)}>Delete</button>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </React.Fragment>
            :
            <React.Fragment>
                <form>
                    <input type="text" placeholder='Name' name='name' value={inputs.name} onChange={handleChange} />
                    <input type="text" placeholder='Description' name='description' value={inputs.description} onChange={handleChange} />
                    <input type="text" placeholder='Date' name='date' value={inputs.date} onChange={handleChange} />
                    <input type="text" placeholder='Time' name='time' value={inputs.time} onChange={handleChange} />
                    <button onClick={() => {
                        props.editAppointment(props.appointment._id, inputs)
                        setIsEditing(false)
                        }}>Update</button>
                </form>
            </React.Fragment>
            }
        </div>
    )
}

export default withAuth(Appointment)