import { ConfigService } from "@nestjs/config";
import { CreateUserDto } from "features/User/core/dto/createUser.dto";
import { UserService } from "features/User/core/use-case/user.service";
import { UserRepository } from "features/User/outBound/user.repository";
import { LoginAuthDto } from "./dto/create-auth.dto";
export declare class AuthService {
    private readonly userService;
    private configService;
    private readonly userRepository;
    constructor(userService: UserService, configService: ConfigService, userRepository: UserRepository);
    create(createAuthDto: CreateUserDto): Promise<{
        success: boolean;
        message: string;
    }>;
    login(createAuthDto: LoginAuthDto): Promise<{
        success: boolean;
        message: string;
        accessToken?: undefined;
        refreshToken?: undefined;
    } | {
        success: boolean;
        message: string;
        accessToken: string;
        refreshToken: string;
    }>;
    getProfile(userId: string): Promise<{
        success: boolean;
        message: string;
        user?: undefined;
    } | {
        success: boolean;
        user: any;
        message?: undefined;
    }>;
}
