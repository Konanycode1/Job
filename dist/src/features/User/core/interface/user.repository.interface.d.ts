import { CreateUserDto } from 'features/User/core/dto/createUser.dto';
import { UpdateUserDto } from 'features/User/core/dto/updateUser.dto';
import { User } from '../schema/user.schema';
export declare abstract class InterfaceUserRepository {
    abstract create(dto: CreateUserDto): Promise<User>;
    abstract findById(id: string): Promise<User | null>;
    abstract findUserExist(email: string): Promise<User | null>;
    abstract findOne(role: string): Promise<User | null>;
    abstract findAll(): Promise<Array<User>>;
    abstract edit(id: string, dto: UpdateUserDto): Promise<User>;
    abstract delete(id: string): Promise<User>;
}
