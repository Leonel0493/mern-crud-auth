import { Router } from 'express'
import { UserAuth } from '../Controllers/Auth.Controller'

const router = Router()

router.post('/login', UserAuth)

export default router
