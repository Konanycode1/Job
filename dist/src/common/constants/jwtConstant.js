"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
const env_validation_1 = require("../../config/env.validation");
exports.jwtConstants = {
    secret: env_validation_1.env.JWT_SECRET,
};
