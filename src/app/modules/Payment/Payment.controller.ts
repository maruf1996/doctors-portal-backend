import { NextFunction, Request, Response } from 'express'
import { PaymentService } from './Payment.service'

const createPayment = async (req: Request, res: Response) => {
  try {
    const data = req.body
    // console.log(data)
    const result = await PaymentService.createPayment(data)
    res.status(200).json({
      status: 'success',
      message: 'Payment Create is Successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

const getPayments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await PaymentService.getPayments()
    res.status(200).json({
      status: 'success',
      message: 'Payment Retrive is Successfully',
      data: result.data,
      meta: result.meta,
    })
  } catch (error) {
    next(error)
  }
}

const getPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const result = await PaymentService.getPayment(id)
    res.status(200).json({
      status: 'success',
      message: 'Payment Retrive is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updatePayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...data } = req.body
    const doctor = await PaymentService.updatePayment(id, data)
    res.status(200).json({
      status: 'success',
      message: 'Payment updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

const deletePayment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id
    const result = await PaymentService.deletePayment(id)
    res.status(200).json({
      status: 'success',
      message: 'Payment Delete is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const PaymentController = {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
}
