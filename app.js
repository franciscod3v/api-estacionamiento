import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 1235

app.disable('x-powered-by')

//Middleware
app.use(express.json())


app.listen(PORT, () => { 
    console.log(`Servidor escuchando el puerto http://localhost:${PORT}`)
})