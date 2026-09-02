import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string(),
  JWT_ACCESS_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  JWT_ACCESS_TTL: z.string().default('5m'),
  JWT_REFRESH_TTL: z.string().default('1d'),
});

// fail-fast: якщо .env неповний, застосунок не стартує з незрозумілою помилкою пізніше
export const env = envSchema.parse(process.env);
