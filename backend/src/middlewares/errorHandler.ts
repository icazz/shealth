import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  statusCode?: number;
  code?: string;
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('❌ Error:', err.message);

  // Prisma: record tidak ditemukan
  if (err.code === 'P2025') {
    res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    return;
  }

  // Prisma: unique constraint (data duplikat)
  if (err.code === 'P2002') {
    res.status(409).json({ success: false, message: 'Data sudah ada / duplikat' });
    return;
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 ? 'Terjadi kesalahan pada server' : err.message,
  });
};
