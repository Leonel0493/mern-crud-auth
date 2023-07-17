import { Router } from 'express'
import { UserSave } from '../Controllers/User.Controller'

const router = Router()

router.post('/save', UserSave)

export default router
