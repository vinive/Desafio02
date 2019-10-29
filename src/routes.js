import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/students', StudentController.store);

routes.use(authMiddleware);

routes.put('/students/:id', StudentController.update);

export default routes;
