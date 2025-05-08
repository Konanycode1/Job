import { Connection } from 'mongoose';
export declare const applyProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("features/Application/core/schema/application.schema").Application, {}, {}, {}, import("mongoose").Document<unknown, {}, import("features/Application/core/schema/application.schema").Application, {}> & import("features/Application/core/schema/application.schema").Application & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<import("features/Application/core/schema/application.schema").Application, import("mongoose").Model<import("features/Application/core/schema/application.schema").Application, any, any, any, import("mongoose").Document<unknown, any, import("features/Application/core/schema/application.schema").Application, any> & import("features/Application/core/schema/application.schema").Application & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("features/Application/core/schema/application.schema").Application, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("features/Application/core/schema/application.schema").Application>, {}> & import("mongoose").FlatRecord<import("features/Application/core/schema/application.schema").Application> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
