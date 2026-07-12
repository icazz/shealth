import { Request, Response, NextFunction } from 'express';
import prisma from '../config/database';
import { z } from 'zod';

// Validasi data form pendaftaran
const registrationSchema = z.object({
  eventId: z.string().min(1, 'Event ID wajib diisi'),
  fullName: z.string().min(2, 'Nama lengkap minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  phone: z.string().min(10, 'Nomor HP minimal 10 digit'),
  institution: z.string().optional(),
  notes: z.string().optional(),
});

// POST /api/registrations
export const registerForEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validasi input
    const parsed = registrationSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        success: false,
        message: 'Data tidak valid',
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const { eventId, fullName, email, phone, institution, notes } = parsed.data;

    // Cek apakah event ada
    const event = await prisma.event.findUnique({ where: { id: eventId } });
    if (!event) {
      res.status(404).json({ success: false, message: 'Event tidak ditemukan' });
      return;
    }

    // Cek apakah email sudah mendaftar di event ini
    const existing = await prisma.registration.findFirst({
      where: { eventId, email },
    });
    if (existing) {
      res.status(409).json({ success: false, message: 'Email ini sudah mendaftar di event ini' });
      return;
    }

    // Simpan pendaftaran
    const registration = await prisma.registration.create({
      data: { eventId, fullName, email, phone, institution, notes },
    });

    res.status(201).json({
      success: true,
      message: 'Pendaftaran berhasil! Terima kasih telah mendaftar.',
      data: registration,
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/registrations/event/:eventId
export const getRegistrationsByEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { eventId } = req.params;
    const registrations = await prisma.registration.findMany({
      where: { eventId },
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: registrations, total: registrations.length });
  } catch (error) {
    next(error);
  }
};

// GET /api/registrations/:id
export const getRegistrationById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const registration = await prisma.registration.findUnique({ where: { id } });

    if (!registration) {
      res.status(404).json({ success: false, message: 'Data pendaftaran tidak ditemukan' });
      return;
    }

    res.json({ success: true, data: registration });
  } catch (error) {
    next(error);
  }
};
