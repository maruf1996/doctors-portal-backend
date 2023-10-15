/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { AdminRoutes } from '../modules/Admin/Admin.route'
import { AppointmentRoutes } from '../modules/Appointment/Appointment.route'
import { authRoutes } from '../modules/Auth/Auth.route'
import { AvailableDoctorRoutes } from '../modules/AvailableDoctor/AvailableDoctor.route'
import { AvailableServiceRoutes } from '../modules/AvailableService/AvailableService.route'
import { DoctorRoutes } from '../modules/Doctors/doctors.route'
import { MedicalProfileRoutes } from '../modules/MedicalProfile/MedicalProfile.route'
import { PatientRoutes } from '../modules/Patient/Patient.route'
import { PaymentRoutes } from '../modules/Payment/Payment.route'
import { ServiceRoutes } from '../modules/Service/Services.route'
import { SpecializationRoutes } from '../modules/Specializations/specializations.router'
import { TimeSlotRoutes } from '../modules/TimeSlots/TimeSlots.route'

const router = express.Router()

const moduleRoutes: any[] = [
  { path: '/specializations', route: SpecializationRoutes },
  { path: '/doctors', route: DoctorRoutes },
  { path: '/patients', route: PatientRoutes },
  { path: '/medicalProfile', route: MedicalProfileRoutes },
  { path: '/appointments', route: AppointmentRoutes },
  { path: '/services', route: ServiceRoutes },
  { path: '/availableServices', route: AvailableServiceRoutes },
  { path: '/availableDocors', route: AvailableDoctorRoutes },
  { path: '/timeSlots', route: TimeSlotRoutes },
  { path: '/payments', route: PaymentRoutes },
  { path: '/admins', route: AdminRoutes },
  { path: '/auth', route: authRoutes },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
