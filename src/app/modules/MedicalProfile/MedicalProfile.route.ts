import express from 'express'
import { MedicalProfileController } from './MedicalProfile.controller'

const router = express.Router()

router.get('/:id', MedicalProfileController.getMedicalProfile)
router.patch('/:id', MedicalProfileController.updateMedicalProfile)
router.delete('/:id', MedicalProfileController.deleteMedicalProfile)
router.get('/', MedicalProfileController.getMedicalProfiles)

export const MedicalProfileRoutes = router
