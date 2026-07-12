import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';
import routes from './routes/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (_req, res) => {
  res.json({ status: 'OK', message: 'SHEALTH API is running 🚀' });
});

// Routes
app.use('/api', routes);

// Error handler (harus paling bawah)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ SHEALTH Backend running on http://localhost:${PORT}`);
});

export default app;
