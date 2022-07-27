import { Router } from 'express';
import authRouter from './auth'
import guildsRouter from './guilds'
import channelsRouter from './channels'


const router = Router();

router.use('/auth', authRouter);
router.use('/guilds', guildsRouter);
router.use('/channels', channelsRouter);

export default router;