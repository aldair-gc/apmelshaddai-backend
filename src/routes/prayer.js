import { Router } from 'express';

import prayerController from '../controllers/Prayer';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, prayerController.index);
router.post('/', prayerController.store);
router.delete('/:id', loginRequired, prayerController.delete);

export default router;
