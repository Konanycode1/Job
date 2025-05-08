"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyProviders = void 0;
const application_schema_1 = require("../schema/application.schema");
exports.applyProviders = [
    {
        provide: 'APPLICATION_MODEL',
        useFactory: (connection) => connection.model('Application', application_schema_1.ApplicationSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
