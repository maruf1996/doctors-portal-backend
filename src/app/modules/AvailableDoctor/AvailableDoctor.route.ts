import express from 'express'
import { AvailableDoctorController } from './AvailableDoctor.controller'

const router = express.Router()

router.post(
  '/create-availableDoctor',
  AvailableDoctorController.createAvailableDoctor,
)
router.get('/:id', AvailableDoctorController.getAvailableDoctor)
router.patch('/:id', AvailableDoctorController.updateAvailableDoctor)
router.delete('/:id', AvailableDoctorController.deleteAvailableDoctor)
router.get('/', AvailableDoctorController.getAvailableDoctors)

export const AvailableDoctorRoutes = router
