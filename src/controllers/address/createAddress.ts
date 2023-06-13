import { Response, Request } from 'express';
import { AddressCreateDto, IAddress } from '../../types/addressInterface';
import { Address } from '../../models/addressModel';

const createAddress = async (req: Request, res: Response): Promise<void> => {
	const body = req.body as AddressCreateDto;

	const address: IAddress = new Address({
		city: body.city,
		street: body.street,
		houseNumber: body.houseNumber,
		entrance: body.entrance,
		apartment: body.apartment
	});

	address.save()
		.then(result => {
			res.status(201).json(result);
		});
};

export { createAddress };
