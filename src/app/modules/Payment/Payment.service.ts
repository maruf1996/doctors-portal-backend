import { Payment } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createPayment = async (data: Payment): Promise<Payment> => {
  const result = await prisma.payment.create({
    data,
  })
  return result
}

const getPayments = async () => {
  const result = await prisma.payment.findMany({})
  const total = await prisma.payment.count()
  return { data: result, meta: total }
}

const getPayment = async (id: string): Promise<Payment | null> => {
  const result = await prisma.payment.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updatePayment = async (
  id: string,
  payload: Partial<Payment>,
): Promise<Payment> => {
  const result = await prisma.payment.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deletePayment = async (id: string) => {
  const result = await prisma.payment.delete({
    where: {
      id,
    },
  })
  return result
}

export const PaymentService = {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
}
