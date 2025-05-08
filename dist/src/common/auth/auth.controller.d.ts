import { AuthService } from './auth.service';
import { LoginAuthDto } from 'common/auth/dto/create-auth.dto';
import { CreateUserDto } from 'features/User/core/dto/createUser.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateUserDto): Promise<any>;
    login(createAuthDto: LoginAuthDto): Promise<any>;
    getProfile(req: any): Promise<any>;
}
