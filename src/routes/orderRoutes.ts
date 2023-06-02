import { Router } from 'express'
import { createOrder } from "../controllers/orders/createOrder";

const router: Router = Router()

router.post('/order', createOrder)

export default router;