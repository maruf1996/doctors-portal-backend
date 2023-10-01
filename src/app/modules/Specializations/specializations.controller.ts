import { Request, Response } from 'express'
import { SpecializationService } from './specializations.services'

const createSpecialization = async (req: Request, res: Response) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await SpecializationService.createSpecialization(data)
    res.status(200).json({
      status: 'success',
      message: 'Specialization Create is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getSpecializations = async (req: Request, res: Response) => {
  try {
    const result = await SpecializationService.getSpecializations()
    res.status(200).json({
      status: 'success',
      message: 'Specializations Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getSpecialization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await SpecializationService.getSpecialization(id)
    res.status(200).json({
      status: 'success',
      message: 'Specialization Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const updateSpecialization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = req.body
    const result = await SpecializationService.updateSpecialization(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Specialization Update is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const deleteSpecialization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await SpecializationService.deleteSpecialization(id)
    res.status(200).json({
      status: 'success',
      message: 'Specialization Delete is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

export const SpecializationController = {
  createSpecialization,
  getSpecializations,
  getSpecialization,
  updateSpecialization,
  deleteSpecialization,
}
