import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'features/User/core/schema/user.schema';
import { Job } from 'features/Job/core/schema/job.schema';

export type ApplicationDocument = Application & Document;

@Schema()
export class Application {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Job', required: true })
  job: Job;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  candidate: User;

  @Prop({ required: true })
  cvUrl: string;

  @Prop({ default: Date.now })
  appliedAt: Date;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
