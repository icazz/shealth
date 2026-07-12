import { Request, Response, NextFunction } from 'express';
import prisma from '../config/database';

// GET /api/events
export const getAllEvents = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: events });
  } catch (error) {
    next(error);
  }
};

// GET /api/events/:slug
export const getEventBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const event = await prisma.event.findUnique({ where: { slug } });

    if (!event) {
      res.status(404).json({ success: false, message: 'Event tidak ditemukan' });
      return;
    }

    res.json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

// POST /api/events
export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, slug, description, date, location, maxParticipants } = req.body;

    const event = await prisma.event.create({
      data: { title, slug, description, date: new Date(date), location, maxParticipants },
    });

    res.status(201).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

// PUT /api/events/:id
export const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.update({
      where: { id },
      data: req.body,
    });
    res.json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/events/:id
export const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({ where: { id } });
    res.json({ success: true, message: 'Event berhasil dihapus' });
  } catch (error) {
    next(error);
  }
};
