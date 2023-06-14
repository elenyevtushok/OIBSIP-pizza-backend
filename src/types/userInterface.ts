import { Document} from 'mongoose'

export interface IUser extends Document {
	firstName: string;
	secondName: string;
	email: string;
	phone: string;
}

export interface UserCreateDto {
	firstName: string;
	secondName: string;
	email: string,
	phone: string;
}
