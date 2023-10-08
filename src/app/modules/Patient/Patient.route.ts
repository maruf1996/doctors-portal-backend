import express from 'express'
import { PatientController } from './Patient.controller'

const router = express.Router()

router.post('/create-patient', PatientController.createPatient)
router.get('/:id', PatientController.getPatient)
router.patch('/:id', PatientController.updatePatient)
router.delete('/:id', PatientController.deletePatient)
router.get('/', PatientController.getPatients)

export const PatientRoutes = router
