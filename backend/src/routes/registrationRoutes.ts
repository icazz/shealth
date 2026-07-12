import { Router } from 'express';
import {
  registerForEvent,
  getRegistrationsByEvent,
  getRegistrationById,
} from '../controllers/registrationController';

const router = Router();

// POST /api/registrations              → daftar ke event (submit form)
router.post('/', registerForEvent);

// GET /api/registrations/event/:eventId → lihat semua pendaftar di suatu event
router.get('/event/:eventId', getRegistrationsByEvent);

// GET /api/registrations/:id           → lihat detail pendaftaran
router.get('/:id', getRegistrationById);

export default router;
