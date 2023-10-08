import { NextFunction, Request, Response } from 'express'
import { MedicalProfileService } from './MedicalProfile.service'

const getMedicalProfiles = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await MedicalProfileService.getMedicalProfiles()
    res.status(200).json({
      status: 'success',
      message: 'MedicalProfile Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getMedicalProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await MedicalProfileService.getMedicalProfile(id)
    res.status(200).json({
      status: 'success',
      message: 'MedicalProfile Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateMedicalProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await MedicalProfileService.updateMedicalProfile(id, data)
    res.status(200).json({
      status: 'success',
      message: 'MedicalProfile updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

const deleteMedicalProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await MedicalProfileService.deleteMedicalProfile(id)
    res.status(200).json({
      status: 'success',
      message: 'MedicalProfile Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const MedicalProfileController = {
  getMedicalProfiles,
  getMedicalProfile,
  updateMedicalProfile,
  deleteMedicalProfile,
}
