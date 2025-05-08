import { InterfaceUserRepository } from 'features/User/core/interface/user.repository.interface';
import { User } from 'features/User/core/schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from 'features/User/core/dto/createUser.dto';
export declare class UserRepository implements InterfaceUserRepository {
    private userModel;
    constructor(userModel: Model<User>);
    create(dto: CreateUserDto): Promise<any>;
    delete(id: string): Promise<any>;
    edit(id: string, dto: any): Promise<any>;
    findById(id: string): Promise<any>;
    findOne(role: string): Promise<any>;
    findUserExist(email: string): Promise<any>;
    findAll(): Promise<any>;
}
