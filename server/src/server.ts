import express, { json } from 'express'
import { config } from './config/main.config'
import { logger } from './config/logger.config'
import cors from 'cors'
import { errorHandler } from './middlewares/error.middlewares'
import userRoutes from './routes/user.routes'


const app = express()
app.use(cors());
app.use(json())

// routes
app.use('/users', userRoutes)
app.use(errorHandler)

app.listen(config.port, () => {
    const appURL = `${config.app_url}:${config.port}`
    logger.info(`Server is running on: ${appURL}`)
})