import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { IIngredient } from '../types/ingredientInterface';
const Schema = mongoose.Schema;

export const ingredientSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	imageUrls: {
		type: [String],
		required: true
	},
}, { timestamps: true });

ingredientSchema.plugin(mongoosePaginate);

export const Ingredient = mongoose.model<
	IIngredient,
	mongoose.PaginateModel<IIngredient>
>('Ingredient', ingredientSchema, 'ingredient');