import express from 'express'
import morgan from 'morgan'
import userRoutes from './Users/Routes/user.routes'
import authRoutes from './Auth/Routes/auth.routes'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

export default app
