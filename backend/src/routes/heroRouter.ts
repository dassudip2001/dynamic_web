import express from 'express';
import { allHeroes, createHero, findHero, updateHero, deleteHero } from '../controllers/heroController';
import { validate } from '../middlewares/validateRequest';
import { createHeroSchema, updateHeroSchema } from '../validation/heroValidationSchema';

const heroRouter: express.Router = express.Router();

// hero routes
heroRouter.get('/hero', allHeroes);
heroRouter.post('/hero', validate(createHeroSchema), createHero);
heroRouter.get('/hero/:id', findHero);
heroRouter.put('/hero/:id', validate(updateHeroSchema), updateHero);
heroRouter.delete('/hero/:id', deleteHero);

export default heroRouter;
