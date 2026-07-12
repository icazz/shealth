import { Router } from 'express';
import eventRoutes from './eventRoutes';
import registrationRoutes from './registrationRoutes';

const router = Router();

router.use('/events', eventRoutes);
router.use('/registrations', registrationRoutes);

export default router;
