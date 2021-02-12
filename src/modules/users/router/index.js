import { Router } from 'express';

import UserController from '../controllers/userController';
import { EnsureUserAuthentication } from '../../../shared/middlewares';

const router = new Router();

router.post('/users', UserController.create);

router.get('/users/:id', EnsureUserAuthentication, UserController.show);
router.delete('/users/:id', EnsureUserAuthentication, UserController.remove);

export default router;
