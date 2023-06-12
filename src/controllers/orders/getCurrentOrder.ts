import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';

const getCurrentOrder = async (req: Request, res: Response): Promise<void> => {
	const sessionId = req.cookies.sessionId;
	Order.findOne({ "sessionId": sessionId })
		.then((result) => {
			res.send(result)
		});
};

export { getCurrentOrder };
