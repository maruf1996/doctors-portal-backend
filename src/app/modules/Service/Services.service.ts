import { Service } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createService = async (data: Service): Promise<Service> => {
  const result = await prisma.service.create({
    data,
  })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getServices = async () => {
  const result = await prisma.service.findMany({})
  const total = await prisma.service.count()
  return { data: result, meta: total }
}

const getService = async (id: string): Promise<Service | null> => {
  const result = await prisma.service.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateService = async (
  id: string,
  payload: Partial<Service>,
): Promise<Service> => {
  const result = await prisma.service.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteService = async (id: string) => {
  const result = await prisma.service.delete({
    where: {
      id,
    },
  })
  return result
}

export const ServicesService = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
}
