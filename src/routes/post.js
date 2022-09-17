import { Router } from 'express';

import postController from '../controllers/Post';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', postController.index);
router.post('/', loginRequired, postController.store);
router.get('/:id', postController.show);
router.put('/:id', loginRequired, postController.update);
router.delete('/:id', loginRequired, postController.delete);

export default router;
