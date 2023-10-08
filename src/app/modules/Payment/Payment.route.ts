import express from 'express'
import { PaymentController } from './Payment.controller'

const router = express.Router()

router.post('/create-payment', PaymentController.createPayment)
router.get('/:id', PaymentController.getPayment)
router.patch('/:id', PaymentController.updatePayment)
router.delete('/:id', PaymentController.deletePayment)
router.get('/', PaymentController.getPayments)

export const PaymentRoutes = router
