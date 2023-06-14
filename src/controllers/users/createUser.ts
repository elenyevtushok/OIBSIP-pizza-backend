import { Response, Request } from 'express';
import { User } from '../../models/userModel';
import { UserCreateDto, IUser } from '../../types/userInterface';


const createUser = async (req: Request, res: Response): Promise<void> => {
	const body = req.body as UserCreateDto;

	const user: IUser = new User({
		firstName: body.firstName,
		secondName: body.secondName,
		email: body.email,
		phone: body.phone
	});

	user.save()
		.then(result => {
			res.status(201).json(result);
		});
};

export { createUser };
