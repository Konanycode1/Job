"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobProviders = void 0;
const job_schema_1 = require("../schema/job.schema");
exports.jobProviders = [
    {
        provide: 'JOB_MODEL',
        useFactory: (connection) => connection.model('Job', job_schema_1.JobSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
