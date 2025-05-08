import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'features/User/core/schema/user.schema';
import { Job } from 'features/Job/core/schema/job.schema';
export type ApplicationDocument = Application & Document;
export declare class Application {
    job: Job;
    candidate: User;
    cvUrl: string;
    appliedAt: Date;
}
export declare const ApplicationSchema: MongooseSchema<Application, import("mongoose").Model<Application, any, any, any, Document<unknown, any, Application, any> & Application & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Application, Document<unknown, {}, import("mongoose").FlatRecord<Application>, {}> & import("mongoose").FlatRecord<Application> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
