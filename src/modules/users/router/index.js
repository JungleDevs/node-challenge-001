import { Router } from 'express';

import { EnsureUserAuthentication } from '../../../shared/middlewares';
import UserController from '../controllers/userController';

const router = new Router();

router.post('/users', UserController.create);

router.use(EnsureUserAuthentication);

router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.remove);

export default router;
