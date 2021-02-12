import { Router } from 'express';

import UserRouter from '../../../modules/users/router';
import SessionsRouter from '../../../modules/sessions/router';

const router = new Router();

router.use(SessionsRouter);
router.use(UserRouter);

export default router;
