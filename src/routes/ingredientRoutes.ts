import { Router } from 'express'
import { searchIngredient } from '../controllers/ingredients/ingredientsControllers';

const router: Router = Router()

router.post('/ingredient/search', searchIngredient)

export default router;