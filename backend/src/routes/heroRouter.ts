import express from 'express';
import { allHeroes, createHero, findHero, updateHero, deleteHero } from '../controllers/heroController';

const heroRouter: express.Router = express.Router();

// hero routes
heroRouter.get('/hero', allHeroes);
heroRouter.post('/hero', createHero);
heroRouter.get('/hero/:id', findHero);
heroRouter.put('/hero/:id', updateHero);
heroRouter.delete('/hero/:id', deleteHero);

export default heroRouter;
