import { Response, Request } from 'express';
import { Ingredient } from '../../models/ingredientModel';
// import { STUB_INGREDIENTS_SEARCH } from '../../stub/stub-ingredients';

const searchIngredient = async (req: Request, res: Response): Promise<void> => {
	Ingredient.paginate(req.body.query, req.body.options)
		.then((result) => {
			res.send(result)
		});
};


export { searchIngredient }