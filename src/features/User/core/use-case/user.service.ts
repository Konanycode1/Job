import { Injectable } from '@nestjs/common';
import { hashPassword } from 'common/utils/crypt';
import { UserRepository } from 'features/User/outBound/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: any): Promise<any> {
    const { email, password, role } = dto;
    if (!email || !password)
      return { sucess: false, message: 'Email and password are required' };
    const hash = await hashPassword(password);
    dto.password = hash;
    return await this.userRepository.create(dto);
  }

  async update(id: string, dto: any): Promise<any> {
    const { email, password, role } = dto;
    const existEmail = await this.userRepository.findUserExist(email);
    if (role === 'admin') {
      const admin = await this.userRepository.findOne(role);
      if (admin) return { sucess: false, message: 'Admin already exist' };
    }
    if (existEmail) return { sucess: false, message: 'Email already exist' };
    if (password) {
      const hash = await hashPassword(password);
      dto.password = hash;
    }
    return await this.userRepository.edit(id, dto);
  }

  async delete(id: string): Promise<any> {
    const deleted = await this.userRepository.delete(id);
    if(deleted.success === false) return { success: false, message: 'User not found' };
    return deleted;
  }
  async findOne(id: string): Promise<any> {
    return await this.userRepository.findById(id);
  }
  async findAll(): Promise<any> {
    return await this.userRepository.findAll();
  }
}
