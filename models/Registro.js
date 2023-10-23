import { readJSON } from '../utils.js'

const registrosJSON = readJSON('./registros.json')

export class Registro {

    static async getAll({ placa }) {
        let registrosFiltrados = registrosJSON
        if (placa) {
            registrosFiltrados = registrosFiltrados.filter(
                registro => registro.placa.toLowerCase() === placa.toLowerCase()
            )
        }
        return registrosFiltrados
    }

    static async getById({ id }) {
        const registro = registrosJSON.find(
            registro => registro.id.toString() === id.toString()
        )

        return registro
    }

    static async create({ input }) {
        //Creando el registro
        let nuevoRegistro = {}

        const cantidadDeRegistros = registrosJSON.length
        if (cantidadDeRegistros === 0) {
            nuevoRegistro = {
                id: 1,
                ...input
            }
        } else {
            const ultimoId = registrosJSON[cantidadDeRegistros - 1].id
            nuevoRegistro = {
                id: ultimoId + 1,
                ...input
            }
        }

        //Agregando nuevo registro
        registrosJSON.push(nuevoRegistro)
        return nuevoRegistro

    }

    static async update({ id, input }) {
        //Buscamos id en arreglo
        const registroId = registrosJSON.findIndex(registro => registro.id.toString() === id.toString())
        //Verificando si se encontró el Id
        if (registroId === -1) {
            return { valor: false, message: 'Registro no encontrado' }
        }
        //Creando el registro con el Id encontrado
        const registroActualizado = {
            ...registrosJSON[registroId],
            ...input
        }
        //Reemplazamos el registro actualizado por el registro antiguo
        registrosJSON[registroId] = registroActualizado

        return { valor: true, message: 'Registro actualizado' }
    }

}