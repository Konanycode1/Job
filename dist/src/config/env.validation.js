"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = __importDefault(require("zod"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const envSchema = zod_1.default.object({
    NODE_ENV: zod_1.default
        .enum(['development', 'production', 'test'])
        .default('development'),
    PORT: zod_1.default.coerce.number().default(3000),
    DATABASE_URL: zod_1.default
        .string()
        .url({ message: 'DATABASE_URL is required' })
        .default('mongodb+srv://abrahamkonany:OBfI1crZWTdwJwun@cluster0.yzcdd.mongodb.net/minsika?retryWrites=true&w=majority&appName=Cluster0'),
    JWT_SECRET: zod_1.default.string({ message: 'JWT_SECRET is required' }),
    JWT_EXPIRES_IN: zod_1.default
        .string({ message: 'JWT_EXPIRES_IN is required' })
        .default('1h'),
    JWT_REFRESH_SECRET: zod_1.default.string({ message: 'JWT_REFRESH_SECRET is required' }),
    JWT_REFRESH_EXPIRES_IN: zod_1.default
        .string({ message: 'JWT_REFRESH_EXPIRES_IN is required' })
        .default('30d'),
});
exports.env = envSchema.parse(process.env);
