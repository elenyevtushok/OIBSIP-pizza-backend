import mongoose, { Document} from 'mongoose'

export interface IAddress extends Document {
	userId?: mongoose.ObjectId;
	city: string;
	street: string;
	houseNumber: string;
	entrance?: string;
	apartment?: string;
}

export interface AddressCreateDto{
	city: string;
	street: string;
	houseNumber: string;
	entrance?: string;
	apartment?: string;
}