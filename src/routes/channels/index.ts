import { Router } from 'express';
import { getMessagesController, postMessageController } from '../../controllers/channels';
import { isAuthenticated } from '../../utils/middlewares';
const router = Router();

router.get('/:id/messages', getMessagesController);

router.post('/:id/messages', postMessageController);

export default router;