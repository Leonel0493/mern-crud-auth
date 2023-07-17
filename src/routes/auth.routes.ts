import { Router } from 'express'
import { Login, Register } from '../controllers/auth.controller'

const _router = Router()

_router.post('/login', Login)
_router.post('/register', Register)

export default _router
