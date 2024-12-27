import express from 'express';
import { all, create, find, update, remove } from '../controllers/serviceController';

const ourServiceRoute: express.Router = express.Router();

// hero routes
ourServiceRoute.get('/services', all);
ourServiceRoute.post('/services', create);
ourServiceRoute.get('/services/:id', find);
ourServiceRoute.put('/services/:id', update);
ourServiceRoute.delete('/services/:id', remove);

export default ourServiceRoute;
