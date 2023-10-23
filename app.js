import express from 'express'

const app = express()

import { corsMiddleWare } from './middlewares/cors.js'

const PORT = process.env.PORT ?? 1235

app.disable('x-powered-by')

//Middleware
app.use(express.json())

//Cors
app.use(corsMiddleWare())


app.listen(PORT, () => { 
    console.log(`Servidor escuchando el puerto http://localhost:${PORT}`)
})