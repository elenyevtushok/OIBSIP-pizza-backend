import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';

const getCurrentOrder = async (req: Request, res: Response): Promise<void> => {
	const id = '648047da74e3d8c116cc5b48';
	Order.findById(id)
		.then((result) => {
			res.send(result)
		});
};

export {getCurrentOrder};
