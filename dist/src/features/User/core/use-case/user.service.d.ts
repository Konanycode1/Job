import { UserRepository } from 'features/User/outBound/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(dto: any): Promise<any>;
    update(id: string, dto: any): Promise<any>;
    delete(id: string): Promise<any>;
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
}
