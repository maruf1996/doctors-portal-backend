import { NextFunction, Request, Response } from 'express'
import { DoctorService } from './doctors.services'

const createDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    const result = await DoctorService.createDoctor(data)
    res.status(200).json({
      status: 'success',
      message: 'Doctor Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getDoctors = async (req: Request, res: Response) => {
  const options = req.query
  //   console.log(options)
  try {
    const result = await DoctorService.getDoctors(options)
    res.status(200).json({
      status: 'success',
      message: 'Doctors Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    res.send(error)
  }
}

const getDoctor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await DoctorService.getDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Doctor Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const updateDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { ...doctorData } = req.body
    const doctor = await DoctorService.updateDoctor(id, doctorData)
    res.status(200).json({
      status: 'success',
      message: 'Doctor updated successfully',
      data: doctor,
    })
  } catch (error) {
    res.send(error)
  }
}

const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await DoctorService.deleteDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Doctor Delete is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

export const DoctorController = {
  createDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
}
