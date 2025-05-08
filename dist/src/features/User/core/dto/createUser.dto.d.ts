import { UserRole } from 'features/User/core/schema/user.schema';
export declare class CreateUserDto {
    email: string;
    password: string;
    role?: UserRole;
}
