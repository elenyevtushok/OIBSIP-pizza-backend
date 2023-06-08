import { Router } from 'express'
import { createOrder } from "../controllers/orders/createOrder";
import { getCurrentOrder } from '../controllers/orders/getCurrentOrder';
import { addOrderItem } from '../controllers/orders/addOrderItem';
import { deleteOrderItem } from '../controllers/orders/deleteOrderItem';

const router: Router = Router()

router.post('/order', createOrder)
router.get('/order/current', getCurrentOrder)
router.put('/order/:id/item', addOrderItem)
router.delete('/order/:id/item/:orderItemId', deleteOrderItem)

export default router;