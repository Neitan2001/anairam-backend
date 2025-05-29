import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

// Middlewares de segurança
app.use(helmet());
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));
app.use(express.json());

// Rotas
app.get('/events', async (_req, res) => {
  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' }
  });
  res.json(events);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));