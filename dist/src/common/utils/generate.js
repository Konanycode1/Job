"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.refreshTokenExpired = exports.generateToken = void 0;
const jwt_1 = require("@nestjs/jwt");
const jwtConstant_1 = require("../constants/jwtConstant");
const jwtService = new jwt_1.JwtService();
const generateToken = (payload, configService) => {
    const jwtTime = configService.get('JWT_EXPIRATION_TIME') || '15m';
    return jwtService.sign({ ...payload }, { secret: jwtConstant_1.jwtConstants.secret, expiresIn: jwtTime });
};
exports.generateToken = generateToken;
const refreshTokenExpired = (payload, configService) => {
    const secret = configService.get('JWT_SECRET');
    const jwtTime = '7d';
    return jwtService.sign({ ...payload }, { secret: jwtConstant_1.jwtConstants.secret, expiresIn: jwtTime });
};
exports.refreshTokenExpired = refreshTokenExpired;
const verifyToken = (token, configService) => {
    try {
        const decoded = jwtService.verify(token, { secret: jwtConstant_1.jwtConstants.secret });
        return decoded;
    }
    catch {
        throw new Error('Invalid token');
    }
};
exports.verifyToken = verifyToken;
