import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import linkController from '../controllers/Link';

const router = new Router();

router.post('/', loginRequired, linkController.store);
router.delete('/:id', loginRequired, linkController.delete);

export default router;
