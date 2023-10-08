import { NextFunction, Request, Response } from 'express'
import { TimeSlotService } from './TimeSlots.service'

const createTimeSlot = async (req: Request, res: Response) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await TimeSlotService.createTimeSlot(data)
    res.status(200).json({
      status: 'success',
      message: 'TimeSlot Create is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getTimeSlots = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await TimeSlotService.getTimeSlots()
    res.status(200).json({
      status: 'success',
      message: 'TimeSlot Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getTimeSlot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await TimeSlotService.getTimeSlot(id)
    res.status(200).json({
      status: 'success',
      message: 'TimeSlot Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateTimeSlot = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await TimeSlotService.updateTimeSlot(id, data)
    res.status(200).json({
      status: 'success',
      message: 'TimeSlot updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

const deleteTimeSlot = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await TimeSlotService.deleteTimeSlot(id)
    res.status(200).json({
      status: 'success',
      message: 'TimeSlot Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const TimeSlotController = {
  createTimeSlot,
  getTimeSlots,
  getTimeSlot,
  updateTimeSlot,
  deleteTimeSlot,
}
