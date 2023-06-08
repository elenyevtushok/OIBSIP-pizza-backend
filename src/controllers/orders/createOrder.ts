import { Response, Request } from 'express';
import { Order, OrderItem } from '../../models/orderModel';
import { IOrder, IOrderItem, OrderCreateDto, OrderItemCreateDto } from '../../types/orderInterface';
import { Pizza } from '../../models/pizzaModel';

// import { STUB_PIZZAS_SEARCH } from '../../stub/stub-pizza';
const createOrder = async (req: Request, res: Response): Promise<void> => {
	const body = req.body as OrderCreateDto;

	const pizza = await Pizza.findById(body.orderItem.productId);
	const orderItemPrice = pizza.sizes.filter(p => p.size == body.orderItem.size)
		.map(p => p.price)[0];

	const orderItem: IOrderItem = new OrderItem({
		productId: pizza._id,
		size: body.orderItem.size,
		price: orderItemPrice,
		amount: 1
	});

	const order: IOrder = new Order({
		items: [orderItem],
		status: "PENDING",
		totalPrice: orderItem.price,
		totalAmount: 1,
	});

	order.save()
		.then(result => {
			res.status(201).json(result);
		});
};

export { createOrder };
