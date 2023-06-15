import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';
import { OrderUpdateDto } from '../../types/orderInterface';

export const updateOrder = async (req: Request, res: Response): Promise<void> => {

	const body = req.body as OrderUpdateDto;
	const orderId = req.params['id']

	const order = await Order.findById(orderId);

	if (body.userId != null) {
		order.userId = body.userId;
	}

	if (body.addressId != null) {
		order.addressId = body.addressId;
	}
	
	if (body.paymentMethod != null) {
		order.paymentMethod = body.paymentMethod;
	}

	order.save()
		.then(result => {
			res.status(200).json(result);
		});
}