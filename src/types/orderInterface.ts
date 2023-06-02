import { Document, Types } from 'mongoose'

export interface IOrder extends Document {
	items: IOrderItem[];
	delivery: string;
	status: string;
	totalPrice: number;
	totalAmount: number;
}

export interface IOrderItem {
	// _id: string;
	productId: Types.ObjectId;
	additionals: string[];
	price: number;
	amount: number;
}

export interface OrderCreateDto{
	orderItem: OrderItemCreateDto;
}


export interface OrderItemCreateDto {
	productId: Types.ObjectId;
	size: string;
}