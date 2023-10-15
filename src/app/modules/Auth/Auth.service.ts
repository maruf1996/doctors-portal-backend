/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Secret } from 'jsonwebtoken'
import { jwtHelpers } from '../../Helpers/jwtHelper'
import prisma from '../../Shared/prisma'

const loginUser = async (payload: any): Promise<any> => {
  const { email, password } = payload

  let isUserExist

  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  })

  const doctor = await prisma.doctor.findUnique({
    where: {
      email,
    },
  })

  const patient = await prisma.patient.findUnique({
    where: {
      email,
    },
  })

  if (!admin && !doctor && !patient) {
    throw new Error('User does not Exist')
  }

  if (admin || patient || doctor) {
    isUserExist = admin || patient || doctor
  }

  if (isUserExist && isUserExist.password !== password) {
    throw new Error('Password is incorrect')
  }

  const payloadData = {
    email: isUserExist?.email,
    role: isUserExist?.role,
    phoneNumber: isUserExist?.phoneNumber,
    fullName: isUserExist?.fullName,
  }

  // create token
  const accessToken = jwtHelpers.createToken(
    payloadData,
    process.env.JWT_SECRET as Secret,
    process.env.EXPIRES_IN as string,
  )
  return { accessToken }
}

const refreshToken = async (token: string) => {
  if (!token) {
    throw new Error('Token is required')
  }

  const decodedToken = jwtHelpers.decodeToken(token)
  const { email, role, phoneNumber, fullName } = decodedToken
  if (!email || !role || !phoneNumber || !fullName) {
    throw new Error('Invalid token')
  }

  const admin = await prisma.admin.findUnique({
    where: {
      email,
    },
  })

  const doctor = await prisma.doctor.findUnique({
    where: {
      email,
    },
  })

  const patient = await prisma.patient.findUnique({
    where: {
      email,
    },
  })

  if (!admin && !doctor && !patient) {
    throw new Error('User does not Exist')
  }

  const payloadData = {
    email,
    role,
    phoneNumber,
    fullName,
  }
  const newAccessToken = jwtHelpers.createToken(
    payloadData,
    process.env.JWT_SECRET as Secret,
    process.env.EXPIRES_IN as string,
  )
  return {
    accessToken: newAccessToken,
  }
}

export const AuthService = { loginUser, refreshToken }
