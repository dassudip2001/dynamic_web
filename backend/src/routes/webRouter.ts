import express from 'express';
import { allData } from '../controllers/mainController';

const webRouter: express.Router = express.Router();

webRouter.get('/details/:id', allData);

export default webRouter;
