import { NextFunction, Request, Response } from 'express'
import { AppointmentService } from './Appointment.service'

const bookAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { patientId, availableServiceId, appointmentDate } = req.body
    const result = await AppointmentService.bookAppontment(
      patientId,
      availableServiceId,
      appointmentDate,
    )
    res.status(200).json({
      status: 'success',
      message: 'Appointment Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const cancelAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    // console.log(id)
    const result = await AppointmentService.cancelAppointment(id)
    res.status(200).json({
      status: 'success',
      message: 'Appointment Cancelled is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const startAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    // console.log(id)
    const result = await AppointmentService.startAppointment(id)
    res.status(200).json({
      status: 'success',
      message: 'Appointment is Started',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const finishAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    // console.log(id)
    const result = await AppointmentService.finishAppointment(id)
    res.status(200).json({
      status: 'success',
      message: 'Appointment is Finished',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AppointmentService.getAppointments()
    res.status(200).json({
      status: 'success',
      message: 'Appointment Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await AppointmentService.getAppointment(id)
    res.status(200).json({
      status: 'success',
      message: 'Appointment Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const result = await AppointmentService.updateAppointment(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Appointment updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const deleteAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await AppointmentService.deleteAppointment(id)
    res.status(200).json({
      status: 'success',
      message: 'Appointment Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const AppointmentController = {
  bookAppointment,
  startAppointment,
  finishAppointment,
  cancelAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
}
