import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';

const deleteOrderItem = async (req: Request, res: Response): Promise<void> => {
	const orderId = req.params['id']
	const orderItemId = req.params['orderItemId']

	const order = await Order.findById(orderId);

	const existingOrderItem = order.items.find(item => item._id == orderItemId);

	if (existingOrderItem.amount > 1) {
		existingOrderItem.amount--;
		order.totalAmount--;
		order.totalPrice -= existingOrderItem.price;
	} else {
		const index = order.items.indexOf(existingOrderItem);
		order.items.splice(index, 1);
		order.totalAmount--;
		order.totalPrice -= existingOrderItem.price;
	}

	order.save()
		.then(result => {
			res.status(200).json(result);
		});
};



// const deleteOrderItem = async (req: Request, res: Response): Promise<void> => {
// 	const id = req.params['id'];
// 	Order.findByIdAndRemove(id)
// 		.then((result) => {
// 			res.send(result)
// 		});
// };


export { deleteOrderItem }