import { Router } from 'express'
import { createUser } from '../controllers/users/createUser';

const router: Router = Router()

router.post('/user', createUser)

export default router;