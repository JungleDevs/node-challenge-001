import { Router } from 'express';
import multer from 'multer';

import AuthorsController from '../controllers/authorsController';
import { EnsureUserAuthentication } from '../../../shared/middlewares';
import uploadConfig from '../../../shared/utils/upload';

const router = new Router();

const upload = multer(uploadConfig);

router.post(
  '/admin/authors',
  EnsureUserAuthentication,
  upload.single('picture'),
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
