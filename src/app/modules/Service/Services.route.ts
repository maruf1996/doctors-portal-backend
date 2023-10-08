import express from 'express'
import { ServiceController } from './Services.controller'

const router = express.Router()

router.post('/create-service', ServiceController.createService)
router.get('/:id', ServiceController.getService)
router.patch('/:id', ServiceController.updateService)
router.delete('/:id', ServiceController.deleteService)
router.get('/', ServiceController.getServices)

export const ServiceRoutes = router
