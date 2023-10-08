import { NextFunction, Request, Response } from 'express'
import { AvailableServicesService } from './AvailableService.service'

const createAvailableService = async (req: Request, res: Response) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await AvailableServicesService.createAvailableService(data)
    res.status(200).json({
      status: 'success',
      message: 'Available Service Create is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getAvailableServices = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await AvailableServicesService.getAvailableServices()
    res.status(200).json({
      status: 'success',
      message: 'Available Service Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getAvailableService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await AvailableServicesService.getAvailableService(id)
    res.status(200).json({
      status: 'success',
      message: 'Available Service Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateAvailableService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await AvailableServicesService.updateAvailableService(
      id,
      data,
    )
    res.status(200).json({
      status: 'success',
      message: 'Available Service updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

const deleteAvailableService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await AvailableServicesService.deleteAvailableService(id)
    res.status(200).json({
      status: 'success',
      message: 'Available Service Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const AvailableServiceController = {
  createAvailableService,
  getAvailableServices,
  getAvailableService,
  updateAvailableService,
  deleteAvailableService,
}
