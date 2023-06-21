import { Router } from 'express'
import { createOrder } from "../controllers/orders/createOrder";
import { getCurrentOrder } from '../controllers/orders/getCurrentOrder';
import { addOrderItem } from '../controllers/orders/addOrderItem';
import { deleteOrderItem } from '../controllers/orders/deleteOrderItem';
import { completeCheckout } from '../controllers/orders/completeCheckout';

const router: Router = Router()

router.post('/order', createOrder)
router.get('/order/current', getCurrentOrder)
router.put('/order/:id/item', addOrderItem)
router.delete('/order/:id/item/:orderItemId', deleteOrderItem)
router.post('/order/:id/checkout/complete', completeCheckout)

export default router;