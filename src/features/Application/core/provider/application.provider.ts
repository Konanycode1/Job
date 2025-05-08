import { Connection } from "mongoose";
import { ApplicationSchema } from "features/Application/core/schema/application.schema";

export const userProviders = [
  {
    provide: 'APPLICATION_MODEL',
    useFactory: (connection: Connection) => connection.model('Application', ApplicationSchema),
    inject: ['DATABASE_CONNECTION'],
  }
]