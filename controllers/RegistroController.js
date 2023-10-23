import { Registro } from '../models/Registro.js'

import { validarRegistro, validarParcialmenteRegistro } from '../schemas/registroSchema.js'

export class RegistroController {
    static async getAll(req, res) {

        const { placa } = req.query

        const registrosFiltrados = await Registro.getAll({ placa })

        if (registrosFiltrados.length === 0) {
            res.status(500).json({ message: 'No encontramos registros con esa placa' })
        } else {
            res.json(registrosFiltrados)
        }

    }

    static async getById(req, res) {
        const { id } = req.params
        const registro = await Registro.getById({ id })
        if (registro) {
            return res.json(registro)
        }
    }

    static async create(req, res) {
        //Usamos zod para validar que la petición cumpla con condiciones para ser aceptada
        const result = validarRegistro(req.body)

        if (!result.success) {
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }

        const nuevoRegistro = await Registro.create({input: result.data})

        res.status(201).json(nuevoRegistro)
    }
}