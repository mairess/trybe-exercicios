import { Router } from 'express';
import PlantController from '../controllers/PlantController';

const plantController = new PlantController();

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));

export default plantRouter;