import { Doctor } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createDoctor = async (data: Doctor): Promise<Doctor> => {
  const result = await prisma.doctor.create({
    data,
  })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDoctors = async (options: any) => {
  const { page, limit, sortBy, sortOrder, searchTerm, ...filterData } = options
  const skip = Number(limit * page - limit) || 0
  const take = parseInt(limit) || 10

  const result = await prisma.doctor.findMany({
    include: {
      specialization: true,
    },
    skip,
    take,
    orderBy: {
      [sortBy]: sortOrder,
    },
    where: {
      AND: [
        {
          OR: [
            {
              fullName: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              specialization: {
                name: {
                  contains: searchTerm,
                  mode: 'insensitive',
                },
              },
            },
            {
              qualification: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          ],
        },
        {
          specialization: {
            name: {
              equals: filterData.specialization as string,
              mode: 'insensitive',
            },
          },
        },
        {
          qualification: {
            equals: filterData.qualification as string,
            mode: 'insensitive',
          },
        },
      ],
    },
  })
  const total = await prisma.doctor.count()
  return { data: result, meta: { total, page, limit } }
}

const getDoctor = async (id: string): Promise<Doctor | null> => {
  const result = await prisma.doctor.findUnique({
    where: {
      id,
    },
    include: {
      specialization: true,
    },
  })
  return result
}

const updateDoctor = async (
  id: string,
  payload: Partial<Doctor>,
): Promise<Doctor> => {
  const result = await prisma.doctor.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteDoctor = async (id: string) => {
  const result = await prisma.doctor.delete({
    where: {
      id,
    },
  })
  return result
}

export const DoctorService = {
  createDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
  deleteDoctor,
}
