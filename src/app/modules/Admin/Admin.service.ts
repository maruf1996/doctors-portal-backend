import { Admin } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createAdmin = async (data: Admin): Promise<Admin> => {
  const result = await prisma.admin.create({
    data,
  })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAdmins = async () => {
  const result = await prisma.admin.findMany({})
  const total = await prisma.admin.count()
  return { data: result, meta: total }
}

const getAdmin = async (id: string): Promise<Admin | null> => {
  const result = await prisma.admin.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateAdmin = async (
  id: string,
  payload: Partial<Admin>,
): Promise<Admin> => {
  const result = await prisma.admin.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteAdmin = async (id: string) => {
  const result = await prisma.admin.delete({
    where: {
      id,
    },
  })
  return result
}

export const AdminService = {
  createAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
}
