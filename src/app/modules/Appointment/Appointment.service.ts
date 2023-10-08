/* eslint-disable @typescript-eslint/no-explicit-any */
import { Appointments } from '@prisma/client'
import prisma from '../../Shared/prisma'

const bookAppontment = async (
  patientId: string,
  availableServiceId: string,
  appointmentDate: string,
): Promise<any> => {
  // cheking the available Service exist
  const availableService = await prisma.availableService.findUnique({
    where: {
      id: availableServiceId,
    },
  })

  if (!availableService) {
    throw new Error('this service is not available')
  }
  if (availableService.availableSeats === 0) {
    throw new Error('this service is fully book')
  }

  const booking = await prisma.$transaction(async transactionClient => {
    const appointment = await transactionClient.appointments.create({
      data: {
        appointmentDate,
        patientId,
        availableServiceId,
        status: 'pending',
      },
    })

    await transactionClient.availableService.update({
      where: {
        id: availableServiceId,
      },
      data: {
        availableSeats: availableService.availableSeats - 1,
        isBooked: availableService.availableSeats - 1 === 0 ? true : false,
      },
    })

    const payment = await transactionClient.payment.create({
      data: {
        amount: availableService.fees,
        paymentStatus: 'pending',
        appointmentId: appointment.id,
      },
    })

    return {
      appointment: appointment,
      payment: payment,
    }
  })
  return booking
}

const cancelAppointment = async (appointmentId: string): Promise<any> => {
  const appointment = await prisma.appointments.findUnique({
    where: {
      id: appointmentId,
    },
  })

  if (!appointment) {
    throw new Error('Appointment does not exist')
  }

  if (appointment.status === 'cancelled') {
    throw new Error('Appointment has already been cancelled')
  }

  if (appointment.status === 'finished') {
    throw new Error('Appointment has already been completed')
  }

  const cancelledAppointment = await prisma.$transaction(
    async transactionClient => {
      const appointmentToCancel = await transactionClient.appointments.update({
        where: {
          id: appointmentId,
        },
        data: {
          status: 'cancelled',
        },
      })

      const availableService =
        await transactionClient.availableService.findUnique({
          where: {
            id: appointment.availableServiceId,
          },
        })

      await transactionClient.availableService.update({
        where: {
          id: appointment.availableServiceId,
        },
        data: {
          availableSeats: {
            increment: 1,
          },

          isBooked:
            availableService && availableService.availableSeats + 1 > 0
              ? false
              : true,
        },
      })

      await transactionClient.payment.update({
        where: {
          appointmentId,
        },
        data: {
          paymentStatus: 'cancelled',
        },
      })

      return {
        appointment: appointmentToCancel,
      }
    },
  )

  return cancelledAppointment
}

const startAppointment = async (appointmentId: string): Promise<any> => {
  const appointment = await prisma.appointments.findUnique({
    where: {
      id: appointmentId,
    },
  })

  if (!appointment) {
    throw new Error('Appointment does not exist')
  }

  if (appointment.status === 'cancelled') {
    throw new Error('Appointment has already been cancelled')
  }

  if (appointment.status === 'finished') {
    throw new Error('Appointment has already been completed')
  }

  const startedAppointment = await prisma.$transaction(
    async transactionClient => {
      await transactionClient.payment.update({
        where: {
          appointmentId,
        },
        data: {
          paymentStatus: 'paid',
          paymentDate: new Date().toISOString(),
        },
      })

      const appointmentToStart = await transactionClient.appointments.update({
        where: {
          id: appointmentId,
        },
        data: {
          status: 'started',
        },
      })

      if (!appointmentToStart) {
        await transactionClient.payment.update({
          where: { appointmentId },
          data: {
            paymentStatus: 'refund',
          },
        })
      }

      return appointmentToStart
    },
  )
  return startedAppointment
}

const finishAppointment = async (appointmentId: string): Promise<any> => {
  const appointment = await prisma.appointments.findUnique({
    where: {
      id: appointmentId,
    },
  })

  if (!appointment) {
    throw new Error('Appointment does not exist')
  }

  if (appointment.status === 'cancelled') {
    throw new Error('Appointment has already been cancelled')
  }

  if (appointment.status === 'finished') {
    throw new Error('Appointment has already been completed')
  }

  const appointmentToFinished = await prisma.appointments.update({
    where: {
      id: appointmentId,
    },
    data: {
      status: 'finished',
    },
  })
  return appointmentToFinished
}

const getAppointments = async () => {
  const result = await prisma.appointments.findMany({})
  const total = await prisma.appointments.count()
  return { data: result, meta: { total } }
}

const getAppointment = async (id: string): Promise<Appointments | null> => {
  const result = await prisma.appointments.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateAppointment = async (
  id: string,
  payload: Partial<Appointments>,
): Promise<Appointments> => {
  const result = await prisma.appointments.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteAppointment = async (id: string) => {
  const result = await prisma.appointments.delete({
    where: {
      id,
    },
  })
  return result
}

export const AppointmentService = {
  bookAppontment,
  startAppointment,
  finishAppointment,
  cancelAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
}
