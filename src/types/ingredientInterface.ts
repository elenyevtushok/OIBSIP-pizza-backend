import { Document, Types } from 'mongoose'

export interface IIngredient extends Document{
	name: string;
	category: string;
	description: string;
	price: number;
	imageUrls: string[];
}