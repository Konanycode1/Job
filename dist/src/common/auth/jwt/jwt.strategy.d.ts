import { ConfigService } from '@nestjs/config';
import { UserService } from 'features/User/core/use-case/user.service';
export type JwtPayload = {
    id: string;
    email: string;
};
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UserService);
    validate(payload: JwtPayload): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
