import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';


const deleteOrderItem = async (req: Request, res: Response): Promise<void> => {
	const id = req.params['id'];
	Order.findByIdAndRemove(id)
		.then((result) => {
			res.send(result)
		});
};

const increaseOrderItemAmount = async (req: Request, res: Response): Promise<void> => {

};


export { deleteOrderItem, increaseOrderItemAmount }