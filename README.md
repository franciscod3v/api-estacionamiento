# API ESTACIONAMIENTO UNICACHI

API de Estacionamiento Unicachi

## Descripción

Este repositorio aloja la API diseñada para gestionar y optimizar el estacionamiento en el mercado Unicachi. Proporciona funcionalidades para la reserva de espacios, seguimiento de disponibilidad y administración de pagos, contribuyendo a una experiencia de estacionamiento eficiente y sin complicaciones en el mercado Unicachi.

## Uso

Cada frase tiene la siguiente estructura:

{
    "id": int,
    "placa": string,
    "puerta_ingreso": string,
    "tipo_servicio": string,
    "tipo_vehiculo": string,
    "ingreso": string-date,
    "puerta_salida": string,
    "salida": string-date,
    "ticket_perdido": boolean,
    "descarga": boolean,
    "tiempo_en_estacionamiento":string-date,
    "total_a_pagar": double
}

La Api permite hacer peticiones GET, POST y PATCH, (De momento DELETE no está habilitado)

En el archivo api.http hay ejemplo de peticiones

## Características

- Node.js v18
- Express.js v4.18.2
- Cors v2.8.5
- Zod: v3.22.2
- Metodos GET, POST, PATCH
- Type: Module

## Licencia

Este proyecto se distribuye bajo la MIT.

## Contacto

Puedes contactarme en franciscod3v@gmail.com.

## Estado del Proyecto

En Desarrollo / Mantenimiento Activo