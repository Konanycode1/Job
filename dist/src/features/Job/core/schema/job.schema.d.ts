import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'features/User/core/schema/user.schema';
export type JobDocument = Job & Document;
export declare class Job {
    title: string;
    description: string;
    recruiter: User;
    createdAt: Date;
}
export declare const JobSchema: MongooseSchema<Job, import("mongoose").Model<Job, any, any, any, Document<unknown, any, Job, any> & Job & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Job, Document<unknown, {}, import("mongoose").FlatRecord<Job>, {}> & import("mongoose").FlatRecord<Job> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
