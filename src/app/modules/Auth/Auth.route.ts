import express from 'express'
import { authController } from './Auth.controller'

const router = express.Router()

router.post('/signIn', authController.loginUser)
router.post('/refresh-token', authController.refreshToken)

export const authRoutes = router
