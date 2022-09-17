import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import mediaController from '../controllers/Media';

const router = new Router();

router.post('/', loginRequired, mediaController.store);
router.delete('/:id', loginRequired, mediaController.delete);

export default router;
