import { Router } from 'express';
import {
  getAllEvents,
  getEventBySlug,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController';

const router = Router();

// GET /api/events          → ambil semua event
router.get('/', getAllEvents);

// GET /api/events/:slug    → ambil detail event berdasarkan slug (misal: she-activity-1)
router.get('/:slug', getEventBySlug);

// POST /api/events         → buat event baru
router.post('/', createEvent);

// PUT /api/events/:id      → update event
router.put('/:id', updateEvent);

// DELETE /api/events/:id   → hapus event
router.delete('/:id', deleteEvent);

export default router;
