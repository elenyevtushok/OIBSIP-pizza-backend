import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';

const getCurrentOrder = async (req: Request, res: Response): Promise<void> => {
	const id = '647dc28d7751a99ee331116d';
	Order.findById(id)
		.then((result) => {
			res.send(result)
		});
};

export {getCurrentOrder};
