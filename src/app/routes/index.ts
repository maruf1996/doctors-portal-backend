/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { DoctorRoutes } from '../modules/Doctors/doctors.route'
import { SpecializationRoutes } from '../modules/Specializations/specializations.router'

const router = express.Router()

const moduleRoutes: any[] = [
  { path: '/specializations', route: SpecializationRoutes },
  { path: '/doctors', route: DoctorRoutes },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
