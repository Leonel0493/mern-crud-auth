import express from 'express'
import morgan from 'morgan'
import userRoutes from './Users/Routes/user.routes'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api/user', userRoutes)

export default app
