import { Response, Request } from 'express';
import { Pizza } from '../../models/pizzaModel';
import { IPizza } from '../../types/pizzaInterface';
// import { STUB_PIZZAS_SEARCH } from '../../stub/stub-pizza';

const getPizza = async (req: Request, res: Response): Promise<void> => {
	console.log('get pizza by id')
	const id = req.params['id']
	Pizza.findById(id)
		.then((result) => {
			res.send(result)
		});
};

const searchPizza = async (req: Request, res: Response): Promise<void> => {
	Pizza.paginate(req.body.query, req.body.options)
		.then((result) => {
			res.send(result)
		});
};


export { searchPizza, getPizza }