import { Router } from "express"

export const router = Router()

import { RegistroController } from '../controllers/RegistroController.js'

router.get('/', RegistroController.getAll)

router.get('/:id', RegistroController.getById)

router.post('/', RegistroController.create)