import express from 'express'
import { AppointmentController } from './Appointment.controller'

const router = express.Router()

router.post('/book-appointment', AppointmentController.bookAppointment)
router.patch('/start-appointment/:id', AppointmentController.startAppointment)
router.patch('/finish-appointment/:id', AppointmentController.finishAppointment)
router.patch('/cancel-appointment/:id', AppointmentController.cancelAppointment)
router.get('/:id', AppointmentController.getAppointment)
router.patch('/:id', AppointmentController.updateAppointment)
router.delete('/:id', AppointmentController.deleteAppointment)
router.get('/', AppointmentController.getAppointments)

export const AppointmentRoutes = router
