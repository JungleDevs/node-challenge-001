import { Router } from 'express';

import SessionController from '../controllers/sessionController';
import { EnsureUserAuthentication } from '../../../shared/middlewares';

const router = new Router();

router.post('/auth', EnsureUserAuthentication, SessionController.create);

export default router;
