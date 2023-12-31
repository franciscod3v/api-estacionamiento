import z from 'zod'

const registroSchema = z.object({
    placa: z.string({
        invalid_type_error: "La placa debe ser un texto",
        required_error: "La placa es requerida"
    }),
    puerta_ingreso: z.string({
        required_error: "La puerta es requerida"
    }),
    tipo_servicio: z.string(
        z.enum(
            ['Cochera', 'Parking']
        ),
        {
            invalid_type_error: 'El tipo de servicio debe estar incluido en la lista',
            required_error: 'El tipo de servicio es requerido'
        }
    ),
    tipo_vehiculo: z.string(
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
    }),
    salida: z.string(
        {
            invalid_type_error: "La fecha y hora de ingreso debe ser un texto",
            required_error: "La fecha y hora de ingreso es requerida" 
    }),
    ticket_perdido: z.boolean(),
    descarga: z.boolean().default(false),
    tiempo_en_estacionamiento: z.string({
        required_error: "La puerta es requerida"
    }).default(""),
    total_a_pagar: z.number().default(0)
})

export function validarRegistro (input) {
    return registroSchema.safeParse(input)
}

export function validarParcialmenteRegistro (input) {
    return registroSchema.partial().safeParse(input)
}