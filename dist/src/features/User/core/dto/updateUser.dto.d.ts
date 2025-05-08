import { CreateUserDto } from 'features/User/core/dto/createUser.dto';
import { UserRole } from 'features/User/core/schema/user.schema';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    email?: string;
    password?: string;
    role?: UserRole;
}
export {};
