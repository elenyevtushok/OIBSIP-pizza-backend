import mongoose, { Types } from 'mongoose';
import { IUser } from '../types/userInterface';
const Schema = mongoose.Schema;

export const userSchema = new Schema<IUser>({
	firstName: {
		type: String,
		required: true
	},
	secondName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: false
	}
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

