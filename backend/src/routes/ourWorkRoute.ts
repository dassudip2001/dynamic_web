import express from 'express';
import { all, create, find, update, remove } from '../controllers/workController';

const workRoute: express.Router = express.Router();

// hero routes
workRoute.get('/works', all);
workRoute.post('/works', create);
workRoute.get('/works/:id', find);
workRoute.put('/works/:id', update);
workRoute.delete('/works/:id', remove);

export default workRoute;
