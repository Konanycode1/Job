import { ConfigService } from '@nestjs/config';
export declare const generateToken: (payload: object, configService: ConfigService) => string;
export declare const refreshTokenExpired: (payload: object, configService: ConfigService) => string;
export declare const verifyToken: (token: string, configService: ConfigService) => string | object;
