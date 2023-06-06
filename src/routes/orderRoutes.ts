import { Router } from 'express'
import { createOrder } from "../controllers/orders/createOrder";
import { getCurrentOrder } from '../controllers/orders/getCurrentOrder';

const router: Router = Router()

router.post('/order', createOrder)
router.get('/order/current', getCurrentOrder)

export default router;