import { NextFunction, Request, Response } from 'express'
import { PatientService } from './Patient.service'

const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { medicalProfile, ...data } = req.body
    const result = await PatientService.createPatient(data, medicalProfile)
    res.status(200).json({
      status: 'success',
      message: 'Patient Create is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getPatients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PatientService.getPatients()
    res.status(200).json({
      status: 'success',
      message: 'Patients Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getPatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await PatientService.getPatient(id)
    res.status(200).json({
      status: 'success',
      message: 'Patient Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updatePatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await PatientService.updatePatient(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Patient updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

const deletePatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await PatientService.deletePatient(id)
    res.status(200).json({
      status: 'success',
      message: 'Patient Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const PatientController = {
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
}
