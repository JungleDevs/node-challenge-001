import { Router } from 'express';

import SessionController from '../controllers/sessionController';

const router = new Router();

router.post('/auth', SessionController.create);

export default router;
