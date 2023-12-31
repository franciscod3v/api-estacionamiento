import cors from 'cors'

export const corsMiddleWare = () => {
    return cors ({
        origin: (origin, callback) => {
            
            const ACCEPTED_ORIGINS = [
                'http://localhost:1234',
                'http://127.0.0.1:5500',
                'https://estacionamiento-unicachi.netlify.app'
            ]

            if (ACCEPTED_ORIGINS.includes(origin)) {
                return callback(null, true)
            }

            if (!origin) {
                return callback(null, true)
            }

            return callback (new Error('Not allowed by Cors'))
        }
    })
}