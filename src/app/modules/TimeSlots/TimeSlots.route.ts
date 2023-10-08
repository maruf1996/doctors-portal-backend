import express from 'express'
import { TimeSlotController } from './TimeSlots.controller'

const router = express.Router()

router.post('/create-timeSlot', TimeSlotController.createTimeSlot)
router.get('/:id', TimeSlotController.getTimeSlot)
router.patch('/:id', TimeSlotController.updateTimeSlot)
router.delete('/:id', TimeSlotController.deleteTimeSlot)
router.get('/', TimeSlotController.getTimeSlots)

export const TimeSlotRoutes = router
