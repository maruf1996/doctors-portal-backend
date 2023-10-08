/* eslint-disable @typescript-eslint/no-explicit-any */
import { MedicalProfile, Patient } from '@prisma/client'
import prisma from '../../Shared/prisma'

const createPatient = async (
  patient: Patient,
  medicalProfile: MedicalProfile,
): Promise<any> => {
  const result = await prisma.$transaction(async transactionClient => {
    const createPatient = await transactionClient.patient.create({
      data: patient,
    })
    const createMedicalProfile = await transactionClient.medicalProfile.create({
      data: {
        ...medicalProfile,
        patientId: createPatient.id,
        profileStatus: 'active',
      },
    })
    return {
      patient: createPatient,
      medicalProfile: createMedicalProfile,
    }
  })
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPatients = async () => {
  const result = await prisma.patient.findMany({})
  const total = await prisma.patient.count()
  return { data: result, meta: { total } }
}

const getPatient = async (id: string): Promise<Patient | null> => {
  const result = await prisma.patient.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updatePatient = async (
  id: string,
  payload: Partial<Patient>,
): Promise<Patient> => {
  const result = await prisma.patient.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deletePatient = async (id: string) => {
  const result = await prisma.patient.delete({
    where: {
      id,
    },
  })
  return result
}

export const PatientService = {
  createPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
}
