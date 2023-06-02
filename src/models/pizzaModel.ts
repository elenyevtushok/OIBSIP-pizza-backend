import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IPizza } from '../types/pizzaInterface';
const Schema = mongoose.Schema;

export const pizzaSizeSchema = new Schema({
	size: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	weight: {
		type: Number,
		required: true
	},
});

export const pizzaSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	ingredients: {
		type: [String],
		required: true
	},
	sizes: {
		type: [pizzaSizeSchema],
		required: true
	},
	imageUrls: {
		type: [String],
		required: true
	},
}, { timestamps: true });

pizzaSchema.plugin(mongoosePaginate);

export const Pizza = mongoose.model<
	IPizza,
	mongoose.PaginateModel<IPizza>
>('Pizza', pizzaSchema, 'pizza');