import { NextFunction, Request, Response } from 'express'
import { AdminService } from './Admin.service'

const createAdmin = async (req: Request, res: Response) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await AdminService.createAdmin(data)
    res.status(200).json({
      status: 'success',
      message: 'Admin Create is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getAdmins = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.getAdmins()
    res.status(200).json({
      status: 'success',
      message: 'Admin Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await AdminService.getAdmin(id)
    res.status(200).json({
      status: 'success',
      message: 'Admin Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await AdminService.updateAdmin(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Admin updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

const deleteAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await AdminService.deleteAdmin(id)
    res.status(200).json({
      status: 'success',
      message: 'Admin Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const AdminController = {
  createAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
}
