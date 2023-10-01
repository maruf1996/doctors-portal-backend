import express from 'express'
import { SpecializationController } from './specializations.controller'

const router = express.Router()

router.post(
  '/create-specialization',
  SpecializationController.createSpecialization,
)

router.get('/:id', SpecializationController.getSpecialization)

router.patch('/:id', SpecializationController.updateSpecialization)

router.get('/', SpecializationController.getSpecializations)

router.delete('/:id', SpecializationController.deleteSpecialization)

export const SpecializationRoutes = router
