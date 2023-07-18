import { Router } from 'express'
import { Logout, UserAuth } from '../Controllers/Auth.Controller'

const router = Router()

router.post('/login', UserAuth)
router.post('/logout', Logout)

export default router
