import mongoose, { Document, Types } from 'mongoose'

export interface IOrder extends Document {
	items: IOrderItem[];
	status: OrderStatus;
	totalPrice: number;
	totalAmount: number;
	sessionId?: string;
	userId?: mongoose.ObjectId;
	addressId?: mongoose.ObjectId;
	paymentMethod?: string;
}

export enum OrderStatus {
	DRAFT = 'DRAFT',
	SUBMITED = 'SUBMITED',
	PAYED = 'PAYED',
	COMPLETED = 'COMPLETED'
}

export interface IOrderItem extends Document {
	productId: mongoose.ObjectId;
	size: string;
	// additionals: string[];
	price: number;
	amount: number;
}

export interface OrderCreateDto {
	orderItem: OrderItemCreateDto;
}

export interface OrderItemCreateDto {
	productId: mongoose.ObjectId;
	size: string;
}

export interface OrderUpdateDto {
	userId?: mongoose.ObjectId;
	addressId?: mongoose.ObjectId;
	paymentMethod?: string;
}