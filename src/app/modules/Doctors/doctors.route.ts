import express from 'express'
import { DoctorController } from './doctors.controller'

const router = express.Router()

router.post('/create-doctor', DoctorController.createDoctor)
router.get('/:id', DoctorController.getDoctor)
router.patch('/:id', DoctorController.updateDoctor)
router.delete('/:id', DoctorController.deleteDoctor)
router.get('/', DoctorController.getDoctors)

export const DoctorRoutes = router
