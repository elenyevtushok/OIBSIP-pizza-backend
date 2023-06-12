import mongoose, { Document, Types } from 'mongoose'

export interface IOrder extends Document {
	items: IOrderItem[];
	status: string;
	totalPrice: number;
	totalAmount: number;
	sessionId?: string;
	userId?: mongoose.ObjectId;
}

export interface IOrderItem extends Document{
	productId: mongoose.ObjectId;
	size:string;
	// additionals: string[];
	price: number;
	amount: number;
}

export interface OrderCreateDto{
	orderItem: OrderItemCreateDto;
}

export interface OrderItemCreateDto {
	productId: mongoose.ObjectId;
	size: string;
}