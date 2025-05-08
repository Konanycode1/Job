import * as mongoose from 'mongoose';
export declare const dbProviders: {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
}[];
