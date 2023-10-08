import { NextFunction, Request, Response } from 'express'
import { AvailableDoctorService } from './AvailableDoctor.service'

const createAvailableDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    const result = await AvailableDoctorService.createAvailableDoctor(data)
    res.status(200).json({
      status: 'success',
      message: 'Available Doctor Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAvailableDoctors = async (req: Request, res: Response) => {
  try {
    const result = await AvailableDoctorService.getAvailableDoctors()
    res.status(200).json({
      status: 'success',
      message: 'Available Doctor Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    res.send(error)
  }
}

const getAvailableDoctor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await AvailableDoctorService.getAvailableDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Available Doctor Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const updateAvailableDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await AvailableDoctorService.updateAvailableDoctor(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Available Doctor updated successfully',
      data: doctor,
    })
  } catch (error) {
    res.send(error)
  }
}

const deleteAvailableDoctor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await AvailableDoctorService.deleteAvailableDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Available Doctor Delete is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

export const AvailableDoctorController = {
  createAvailableDoctor,
  getAvailableDoctors,
  getAvailableDoctor,
  updateAvailableDoctor,
  deleteAvailableDoctor,
}
