import { Router } from 'express'
import { createAddress } from '../controllers/address/createAddress';

const router: Router = Router()

router.post('/address', createAddress)

export default router;