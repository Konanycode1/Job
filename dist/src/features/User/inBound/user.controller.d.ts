import { UserService } from 'features/User/core/use-case/user.service';
import { UpdateUserDto } from 'features/User/core/dto/updateUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    delete(id: string): Promise<any>;
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
}
