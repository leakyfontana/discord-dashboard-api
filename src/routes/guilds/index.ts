import { Router } from 'express';
import { getGuildChannelsController, getGuildController, getGuildPermissionsController, getGuildsController } from '../../controllers/guilds';
import { isAuthenticated } from '../../utils/middlewares';
const router = Router();

router.get('/', isAuthenticated, getGuildsController);

router.get('/:id', isAuthenticated, getGuildController);

router.get('/:id/channels', isAuthenticated, getGuildChannelsController);

router.get('/:id/permissions', isAuthenticated, getGuildPermissionsController);

export default router;