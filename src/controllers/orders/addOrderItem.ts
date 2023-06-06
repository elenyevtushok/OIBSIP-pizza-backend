import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';
import { IOrder, IOrderItem, OrderCreateDto, OrderItemCreateDto } from '../../types/orderInterface';
import { Pizza } from '../../models/pizzaModel';

const addOrderItem = async (req: Request, res: Response): Promise<void> => {
	const orderId = req.params['id']
	const body = req.body as OrderItemCreateDto;


	const order = await Order.findById(orderId);

	const existingOrderItem = order.items.find(item => (item.productId == body.productId) && (item.size == body.size));

	if (existingOrderItem == undefined) {
		const newPizzaId = body.productId;
		const pizza = await Pizza.findById(newPizzaId);

		const orderItemPrice = pizza.sizes.filter(p => p.size == body.size)
			.map(p => p.price)[0];

		const orderItem: IOrderItem = {
			productId: pizza._id,
			price: orderItemPrice,
			size: body.size,
			amount: 1
		};

		order.items.push(orderItem);
		order.totalAmount ++;
		order.totalPrice += orderItemPrice;
	}

	if (existingOrderItem != undefined) {
		existingOrderItem.amount ++;
		order.totalAmount++;
		order.totalPrice += existingOrderItem.price;
	}


	order.save()
		.then(result => {
			res.status(200).json(result);
		});
};

export { addOrderItem };
