import { Document, Types } from 'mongoose'

export interface IOrder extends Document {
	items: IOrderItem[];
	status: string;
	totalPrice: number;
	totalAmount: number;
}

export interface IOrderItem {
	productId: Types.ObjectId;
	size:string;
	// additionals: string[];
	price: number;
	amount: number;
}

export interface OrderCreateDto{
	orderItem: OrderItemCreateDto;
}

// export interface OrderModifyDto {
// 	orderItem: OrderItemCreateDto;
// 	// totalPrice: number;
// 	// totalAmount: number;
// }

export interface OrderItemCreateDto {
	productId: Types.ObjectId;
	size: string;
}