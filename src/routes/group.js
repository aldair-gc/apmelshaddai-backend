import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import linkController from '../controllers/Group';

const router = new Router();

router.get('/', linkController.index);
router.post('/', loginRequired, linkController.store);
router.delete('/:id', loginRequired, linkController.delete);

export default router;
