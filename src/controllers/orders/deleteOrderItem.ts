import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';
import { IOrder } from '../../types/orderInterface';
import queryString from 'query-string';

const deleteOrderItem = async (req: Request, res: Response): Promise<void> => {
	const orderId = req.params['id']
	const orderItemId = req.params['orderItemId']
	const deleteOrderItemCompletely = req.query.deleteOrderItemCompletely == 'true';

	const order = await Order.findById(orderId);
	removeOrderItem(order, orderItemId, deleteOrderItemCompletely);
	order.save()
		.then(result => {
			res.status(200).json(result);
		});
};

const removeOrderItem = (order: IOrder, orderItemId: string, completlyRemove: boolean) => {
	const existingOrderItem = order.items.find(item => item._id == orderItemId);
	if (existingOrderItem.amount == 1 || completlyRemove) {
		const index = order.items.indexOf(existingOrderItem);
		order.items.splice(index, 1);
		order.totalAmount -= existingOrderItem.amount;
		order.totalPrice -= existingOrderItem.price * existingOrderItem.amount;
		return;
	}

	existingOrderItem.amount--;
	order.totalAmount--;
	order.totalPrice -= existingOrderItem.price;
};

export { deleteOrderItem }