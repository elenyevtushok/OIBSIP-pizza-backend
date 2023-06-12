import mongoose, { Types } from 'mongoose';
import { IAddress } from '../types/addressInterface';
const Schema = mongoose.Schema;

export const addressSchema = new Schema<IAddress>({
	userId: {
		type: Types.ObjectId,
		required: false,
	},
	city: {
		type: String,
		required: true
	},
	street: {
		type: String,
		required: true
	},
	houseNumber: {
		type: String,
		required: true
	},
	entrance: {
		type: String,
		required: false
	},
	apartment:{
		type: String,
		required: true
	}
}, { timestamps: true });

export const Address = mongoose.model('Address', addressSchema);

