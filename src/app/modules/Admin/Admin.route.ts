import express from 'express'
import { AdminController } from './Admin.controller'

const router = express.Router()

router.post('/create-admin', AdminController.createAdmin)
router.get('/:id', AdminController.getAdmin)
router.patch('/:id', AdminController.updateAdmin)
router.delete('/:id', AdminController.deleteAdmin)
router.get('/', AdminController.getAdmins)

export const AdminRoutes = router
