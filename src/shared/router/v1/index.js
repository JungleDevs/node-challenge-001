import { Router } from 'express';

import UserRouter from '../../../modules/users/router';
import SessionsRouter from '../../../modules/sessions/router';

const router = new Router();

router.use(UserRouter);
router.use(SessionsRouter);

export default router;
