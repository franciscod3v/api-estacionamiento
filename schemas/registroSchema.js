import z from 'zod'

const registroSchema = z.object({
    id: z.number().int().min(0),
    placa: z.string({
        invalid_type_error: "La placa debe ser un texto",
        required_error: "La placa es requerida"
    }),
    puerta_ingreso: z.string({
        required_error: "La puerta es requerida"
    }),
    tipo_servicio: z.array(
        z.enum(
            ['Cochera', 'Parking']
        ),
        {
            invalid_type_error: 'El tipo de servicio debe estar incluido en la lista',
            required_error: 'El tipo de servicio es requerido'
        }
    ),
    tipo_vehiculo: z.array(
        z.enum(
            [
                "Moto lineal",
                "Carreta",
                "Moto Triciclo",
                "Mototaxi",
                "Autos",
                "Camioneta",
                "Minivan",
                "Combis",
                "Furgón pequeño",
                "Furgón mediano",
                "Furgón grande",
                "Camión",
                "Trailer"
            ]
        ),
        {
            invalid_type_error: 'El tipo de vehículo debe estar incluido en la lista',
            required_error: 'El tipo de vehículo es requerido'
        }
    ),
    ingreso: z.string(
        {
            invalid_type_error: "La fecha y hora de ingreso debe ser un texto",
            required_error: "La fecha y hora de ingreso es requerida" 
    }),
    puerta_salida: z.string({
        required_error: "La puerta es requerida"
    })
})