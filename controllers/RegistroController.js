import { Registro } from '../models/Registro.js'

import { validarRegistro, validarParcialmenteRegistro } from '../schemas/registroSchema.js'

export class RegistroController {
    static async getAll(req, res) {
        const { placa } = req.query

        const registrosFiltrados = await Registro.getAll({ placa })

        if (registrosFiltrados.length === 0) {
            res.status(500).json({message: 'No encontramos registros con esa placa'})
        } else {
            res.json(registrosFiltrados)
        }

    }
}