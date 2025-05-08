import z from 'zod';
import * as dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z
    .string()
    .url({ message: 'DATABASE_URL is required' })
    .default(
      'mongodb+srv://abrahamkonany:OBfI1crZWTdwJwun@cluster0.yzcdd.mongodb.net/minsika?retryWrites=true&w=majority&appName=Cluster0',
    ),
  JWT_SECRET: z.string({ message: 'JWT_SECRET is required' }),
  JWT_EXPIRES_IN: z
    .string({ message: 'JWT_EXPIRES_IN is required' })
    .default('1h'),
  JWT_REFRESH_SECRET: z.string({ message: 'JWT_REFRESH_SECRET is required' }),
  JWT_REFRESH_EXPIRES_IN: z
    .string({ message: 'JWT_REFRESH_EXPIRES_IN is required' })
    .default('30d'),
});

export const env = envSchema.parse(process.env);
