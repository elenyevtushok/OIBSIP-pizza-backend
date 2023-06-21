import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';
import { OrderStatus } from '../../types/orderInterface';

const getCurrentOrder = async (req: Request, res: Response): Promise<void> => {
	const sessionId = req.cookies.sessionId;
	Order.findOne({
		"sessionId": sessionId,
		"status": OrderStatus.DRAFT
	})
		.then((result) => {
			res.send(result)
		});
};

export { getCurrentOrder };
