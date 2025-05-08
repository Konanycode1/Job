import { Connection } from 'mongoose';
import { JobSchema } from 'features/Job/core/schema/job.schema';
export const jobProviders = [
  {
    provide: 'JOB_MODEL',
    useFactory: (connection: Connection) => connection.model('Job', JobSchema),
    inject: ['DATABASE_CONNECTION'],
  }
]