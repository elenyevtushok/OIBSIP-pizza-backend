import mongoose, { Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IOrder } from '../types/orderInterface';
const Schema = mongoose.Schema;

export const orderItemSchema = new Schema({
	productId: {
		type: Types.ObjectId,
		required: true,
	},
	size: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
}, { timestamps: true });

export const orderSchema = new Schema({
	items: {
		type: [orderItemSchema],
		required: true,
	},
	status: {
		type: String,
		required: true
	},
	totalPrice: {
		type: Number,
		required: true
	},
	totalAmount: {
		type: Number,
		required: true
	},
}, { timestamps: true });

orderSchema.plugin(mongoosePaginate);

export const Order = mongoose.model<
	IOrder,
	mongoose.PaginateModel<IOrder>
>('Order', orderSchema, 'order');