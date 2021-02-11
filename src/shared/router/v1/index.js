import { Router } from 'express';

import UserRouter from '../../../modules/users/router';

const router = new Router();

router.use(UserRouter);

router.get('*', (req, res) => {
  res.send('Hello World!');
});

export default router;
