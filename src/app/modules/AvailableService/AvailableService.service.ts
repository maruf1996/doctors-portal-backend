import { AvailableService } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createAvailableService = async (
  data: AvailableService,
): Promise<AvailableService> => {
  const result = await prisma.availableService.create({
    data,
  })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAvailableServices = async () => {
  const result = await prisma.availableService.findMany({})
  const total = await prisma.availableService.count()
  return { data: result, meta: total }
}

const getAvailableService = async (
  id: string,
): Promise<AvailableService | null> => {
  const result = await prisma.availableService.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateAvailableService = async (
  id: string,
  payload: Partial<AvailableService>,
): Promise<AvailableService> => {
  const result = await prisma.availableService.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteAvailableService = async (id: string) => {
  const result = await prisma.availableService.delete({
    where: {
      id,
    },
  })
  return result
}

export const AvailableServicesService = {
  createAvailableService,
  getAvailableServices,
  getAvailableService,
  updateAvailableService,
  deleteAvailableService,
}
