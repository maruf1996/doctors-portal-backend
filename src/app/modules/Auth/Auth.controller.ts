import { NextFunction, Request, Response } from 'express'
import { AuthService } from './Auth.service'

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...loginData } = req.body
    const result = await AuthService.loginUser(loginData)

    res.send({
      statusCode: 200,
      success: true,
      message: 'User Logged in Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization
    const result = await AuthService.refreshToken(token as string)

    res.send({
      statusCode: 200,
      success: true,
      message: 'token refresh is Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const authController = { loginUser, refreshToken }
