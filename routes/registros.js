import { Router } from "express"

export const router = Router()

import { RegistroController } from '../controllers/RegistroController.js'

router.get('/', RegistroController.getAll)