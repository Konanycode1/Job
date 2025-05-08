import * as mongoose from 'mongoose';
import { env } from './env.validation';

export const dbProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        const connection = await mongoose.connect(env.DATABASE_URL);
        console.log('✅ Database connection established successfully');
        return connection;
      } catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1);
      }
    },
  },
];
