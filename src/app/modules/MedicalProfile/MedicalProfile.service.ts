import { MedicalProfile } from '@prisma/client'
import prisma from '../../Shared/prisma'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMedicalProfiles = async () => {
  const result = await prisma.medicalProfile.findMany({})
  const total = await prisma.medicalProfile.count()
  return { data: result, meta: total }
}

const getMedicalProfile = async (
  id: string,
): Promise<MedicalProfile | null> => {
  const result = await prisma.medicalProfile.findUnique({
    where: {
      id,
    },
  })
  return result
}

const updateMedicalProfile = async (
  id: string,
  payload: Partial<MedicalProfile>,
): Promise<MedicalProfile> => {
  const result = await prisma.medicalProfile.update({
    where: {
      id: id,
    },
    data: payload,
  })
  return result
}

const deleteMedicalProfile = async (id: string) => {
  const result = await prisma.medicalProfile.delete({
    where: {
      id,
    },
  })
  return result
}

export const MedicalProfileService = {
  getMedicalProfiles,
  getMedicalProfile,
  updateMedicalProfile,
  deleteMedicalProfile,
}
