import { Connection } from 'mongoose';
export declare const jobProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("features/Job/core/schema/job.schema").Job, {}, {}, {}, import("mongoose").Document<unknown, {}, import("features/Job/core/schema/job.schema").Job, {}> & import("features/Job/core/schema/job.schema").Job & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<import("features/Job/core/schema/job.schema").Job, import("mongoose").Model<import("features/Job/core/schema/job.schema").Job, any, any, any, import("mongoose").Document<unknown, any, import("features/Job/core/schema/job.schema").Job, any> & import("features/Job/core/schema/job.schema").Job & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("features/Job/core/schema/job.schema").Job, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("features/Job/core/schema/job.schema").Job>, {}> & import("mongoose").FlatRecord<import("features/Job/core/schema/job.schema").Job> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
