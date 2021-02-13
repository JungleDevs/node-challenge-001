import { Router } from 'express';

import AuthorsController from '../controllers/authorsController';
import { EnsureUserAuthentication } from '../../../shared/middlewares';

const router = new Router();

router.post(
  '/admin/authors',
  EnsureUserAuthentication,
  AuthorsController.create,
);
router.get('/admin/authors', EnsureUserAuthentication, AuthorsController.index);
router.get(
  '/admin/authors/:id',
  EnsureUserAuthentication,
  AuthorsController.show,
);
router.put(
  '/admin/authors/:id',
  EnsureUserAuthentication,
  AuthorsController.update,
);
router.delete(
  '/admin/authors/:id',
  EnsureUserAuthentication,
  AuthorsController.remove,
);

export default router;
