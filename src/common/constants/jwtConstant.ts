import { env } from 'config/env.validation';

export const jwtConstants = {
  secret: env.JWT_SECRET,
};
