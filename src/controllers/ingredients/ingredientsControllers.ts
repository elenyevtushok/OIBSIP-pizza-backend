import { Response, Request } from 'express';
// import { Pizza } from '../../models/pizzaModel';
// import { IIngredient } from '../../types/ingredientInterface';
import { STUB_INGREDIENTS_SEARCH } from '../../stub/stub-ingredients';

const searchIngredient = async (req: Request, res: Response): Promise<void> => {
	res.send(STUB_INGREDIENTS_SEARCH)
	// Pizza.paginate(req.body.query, req.body.options)
	// 	.then((result) => {
	// 		res.send(result)
	// 	});
};


export { searchIngredient }