import React from 'react'
import Appointment from './Appointment'
import AppointmentForm from './AppointmentForm'
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
                deleteAppointment = {this.props.deleteAppointment}
                />
            )
        })

        return(
            <div>
                <AppointmentForm />
                {mappedAppointments}
            </div>
        )
    }
}

export default withAuth(AppointmentList)