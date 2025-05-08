import { Connection } from 'mongoose';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("features/User/core/schema/user.schema").User, {}, {}, {}, import("mongoose").Document<unknown, {}, import("features/User/core/schema/user.schema").User, {}> & import("features/User/core/schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<import("features/User/core/schema/user.schema").User, import("mongoose").Model<import("features/User/core/schema/user.schema").User, any, any, any, import("mongoose").Document<unknown, any, import("features/User/core/schema/user.schema").User, any> & import("features/User/core/schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("features/User/core/schema/user.schema").User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("features/User/core/schema/user.schema").User>, {}> & import("mongoose").FlatRecord<import("features/User/core/schema/user.schema").User> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
