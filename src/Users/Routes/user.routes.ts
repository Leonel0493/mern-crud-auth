import { Router } from 'express'
import { UserProfile, UserSave } from '../Controllers/User.Controller'
import { AuthRequired } from '../../Shared/application/TokenValidator'

const router = Router()

router.post('/save', UserSave)
router.get('/profile', AuthRequired, UserProfile)

export default router
