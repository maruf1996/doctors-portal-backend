import express from 'express'
import { AvailableServiceController } from './AvailableService.controller'

const router = express.Router()

router.post(
  '/create-availableService',
  AvailableServiceController.createAvailableService,
)
router.get('/:id', AvailableServiceController.getAvailableService)
router.patch('/:id', AvailableServiceController.updateAvailableService)
router.delete('/:id', AvailableServiceController.deleteAvailableService)
router.get('/', AvailableServiceController.getAvailableServices)

export const AvailableServiceRoutes = router
