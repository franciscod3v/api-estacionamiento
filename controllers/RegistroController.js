import { Registro } from '../models/Registro.js'

import { validarRegistro, validarParcialmenteRegistro } from '../schemas/registroSchema.js'

export class RegistroController {
    static async getAll(req, res) {

        const { placa } = req.query

        const registrosFiltrados = await Registro.getAll({ placa })

        if (registrosFiltrados.length === 0) {
            res.status(500).json({ message: 'No encontramos registros con la placa ingresada o no hay registros' })
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
        res.status(404).json({message: 'No encontramos tu Id'})
    }

    static async create(req, res) {
        //Usamos zod para validar que la petición cumpla con condiciones para ser aceptada
        const result = validarRegistro(req.body)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const nuevoRegistro = await Registro.create({ input: result.data })

        res.status(201).json(nuevoRegistro)
    }

    static async update(req, res) {
        //Validamos petición
        const result = validarParcialmenteRegistro(req.body)

        if (!result.success) {
            res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        //Guardamos Id
        const { id } = req.params

        //Modificando el cuerpo del registro de acuerdo al Id
        const registroActualizado = await Registro.update({ id, input: result.data })

        if (!registroActualizado.valor) {
            return res.status(404).json(registroActualizado.message)
        } else {
            return res.json(registroActualizado.message)
        }

    }

    static async delete(req, res) {
        //Capturamos id
        const { id } = req.params

        const registroId = await Registro.delete({ id })

        //Verificamos si encontraron el Id
        if (registroId === false) {
            return res.status(404).json({message: 'Registro no encontrada'})
        } else {
            return res.json({message: 'Registro borrado'})
        }
    }
}