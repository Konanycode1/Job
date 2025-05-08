import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'features/User/core/schema/user.schema';

export type JobDocument = Job & Document;

@Schema()
export class Job {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  recruiter: User;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job);
