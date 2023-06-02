import { Response, Request } from 'express';
import { Order } from '../../models/orderModel';
import { IOrder, IOrderItem, OrderCreateDto } from '../../types/orderInterface';
import { Pizza } from '../../models/pizzaModel';

// import { STUB_PIZZAS_SEARCH } from '../../stub/stub-pizza';
const createOrder = async (req: Request, res: Response): Promise<void> => {
	const body = req.body as OrderCreateDto;

	const pizza = await Pizza.findById(body.orderItem.productId);
	const orderItemPrice = pizza.sizes.filter(p => p.size == body.orderItem.size)
		.map(p => p.price)[0];

	const orderItem: IOrderItem = {
		productId: pizza._id,
		additionals: [],
		price: orderItemPrice,
		amount: 1
	};

	const order: IOrder = new Order({
		items: [orderItem],
		delivery: "",
		status: "PENDING",
		totalPrice: orderItem.price,
		totalAmount: 1,
	});

	order.save()
		.then(result => {
			res.status(201).json(result);
		});
};

export {createOrder};
