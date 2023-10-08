import { AvailableDoctor } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createAvailableDoctor = async (
  data: AvailableDoctor,
): Promise<AvailableDoctor> => {
  const result = await prisma.availableDoctor.create({
    data,
  })
  return result
}

const getAvailableDoctors = async () => {
  const result = await prisma.availableDoctor.findMany({})
  const total = await prisma.availableDoctor.count()
  return { data: result, meta: { total } }
}

const getAvailableDoctor = async (
  id: string,
): Promise<AvailableDoctor | null> => {
  const result = await prisma.availableDoctor.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateAvailableDoctor = async (
  id: string,
  payload: Partial<AvailableDoctor>,
): Promise<AvailableDoctor> => {
  const result = await prisma.availableDoctor.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteAvailableDoctor = async (id: string) => {
  const result = await prisma.availableDoctor.delete({
    where: {
      id,
    },
  })
  return result
}

export const AvailableDoctorService = {
  createAvailableDoctor,
  getAvailableDoctors,
  getAvailableDoctor,
  updateAvailableDoctor,
  deleteAvailableDoctor,
}
