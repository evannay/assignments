import React from 'react'
import Appointment from './Appointment'
import { withAuth } from '../AuthContext';

class AppointmentList extends React.Component {
   
    componentDidMount() {
        this.props.getAppointments()
    }


    render() {
        const mappedAppointments = this.props.appointments.map(appointment => {
            return (
                <Appointment
                key = {appointment._id} 
                appointment = {appointment}
                />
            )
        })

        return(
            <div>
                {mappedAppointments}
            </div>
        )
    }
}

export default withAuth(AppointmentList)