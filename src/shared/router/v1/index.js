import { Router } from 'express';

import UserRouter from '../../../modules/users/router';
import SessionsRouter from '../../../modules/sessions/router';
import AuthorRouter from '../../../modules/authors/router';
import { NotFoundMiddleware, ErrorHandlerMiddleware } from '../../middlewares';

const router = new Router();

router.use(SessionsRouter);
router.use(UserRouter);
router.use(AuthorRouter);

router.use(NotFoundMiddleware);
router.use(ErrorHandlerMiddleware);

export default router;
