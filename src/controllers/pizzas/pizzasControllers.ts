import { Response, Request } from 'express';
// import { Pizza } from '../../models/pizzaModel';
import { IPizza } from '../../types/pizzaInterface';
import { STUB_PIZZAS_SEARCH } from '../../stub/stub-pizza';

const getPizza = async (req: Request, res: Response): Promise<void> => {
	res.send(STUB_PIZZAS_SEARCH[0])
	// const id = req.params['id']
	// Pizza.findById(id)
	// 	.then((result) => {
	// 		res.send(result)
	// 	});
};

const searchPizza = async (req: Request, res: Response): Promise<void> => {
	res.send(STUB_PIZZAS_SEARCH)
	// Pizza.paginate(req.body.query, req.body.options)
	// 	.then((result) => {
	// 		res.send(result)
	// 	});
};


export { searchPizza, getPizza }