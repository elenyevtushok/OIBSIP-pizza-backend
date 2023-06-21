import mongoose, { Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IOrder, IOrderItem, OrderStatus } from '../types/orderInterface';
const Schema = mongoose.Schema;

export const orderItemSchema = new Schema<IOrderItem>({
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
	sessionId: {
		type: String,
		required: false
	},
	paymentMethod:{
		type: String,
		required: false
	},
	userId: {
		type: Types.ObjectId,
		required: false
	},
	addressId: {
		type: Types.ObjectId,
		required: false
	},
	transactionType: {
		type: String,
		enum: Object.values(OrderStatus)
	}
}, { timestamps: true });

orderSchema.plugin(mongoosePaginate);

export const OrderItem = mongoose.model('OrderItem', orderItemSchema);

export const Order = mongoose.model<
	IOrder,
	mongoose.PaginateModel<IOrder>
>('Order', orderSchema, 'order');
