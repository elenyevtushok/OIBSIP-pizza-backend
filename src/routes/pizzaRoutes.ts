import { Router } from 'express'
import { getPizza, searchPizza} from '../controllers/pizzas/pizzasControllers';

const router: Router = Router()

router.get('/pizza/:id', getPizza)
router.post('/pizza/search', searchPizza)

export default router;