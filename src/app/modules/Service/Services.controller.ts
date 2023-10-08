import { NextFunction, Request, Response } from 'express'
import { ServicesService } from './Services.service'

const createService = async (req: Request, res: Response) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await ServicesService.createService(data)
    res.status(200).json({
      status: 'success',
      message: 'Service Create is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getServices = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ServicesService.getServices()
    res.status(200).json({
      status: 'success',
      message: 'Service Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await ServicesService.getService(id)
    res.status(200).json({
      status: 'success',
      message: 'Service Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await ServicesService.updateService(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Service updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

const deleteService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await ServicesService.deleteService(id)
    res.status(200).json({
      status: 'success',
      message: 'Service Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const ServiceController = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
}
