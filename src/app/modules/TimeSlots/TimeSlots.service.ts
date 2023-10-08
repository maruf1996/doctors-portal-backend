import { TimeSlots } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createTimeSlot = async (data: TimeSlots): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.create({
    data,
  })
  return result
}

const getTimeSlots = async () => {
  const result = await prisma.timeSlots.findMany({})
  const total = await prisma.timeSlots.count()
  return { data: result, meta: total }
}

const getTimeSlot = async (id: string): Promise<TimeSlots | null> => {
  const result = await prisma.timeSlots.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateTimeSlot = async (
  id: string,
  payload: Partial<TimeSlots>,
): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteTimeSlot = async (id: string) => {
  const result = await prisma.timeSlots.delete({
    where: {
      id,
    },
  })
  return result
}

export const TimeSlotService = {
  createTimeSlot,
  getTimeSlots,
  getTimeSlot,
  updateTimeSlot,
  deleteTimeSlot,
}
