import { Document} from 'mongoose'

export interface IUser extends Document {
	firstName: string;
	surname: string;
	email: string;
	phone: string;
}

export interface UserCreateDto {
	firstName: string;
	surname: string;
	email: string,
	phone: string;
}
