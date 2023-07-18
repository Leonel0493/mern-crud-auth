import express from 'express'
import morgan from 'morgan'
import userRoutes from './Users/Routes/user.routes'
import authRoutes from './Auth/Routes/auth.routes'
import cookieParser from 'cookie-parser'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

export default app
