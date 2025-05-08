import { Inject, Injectable } from '@nestjs/common';
import { InterfaceUserRepository } from 'features/User/core/interface/user.repository.interface';
import { User } from 'features/User/core/schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from 'features/User/core/dto/createUser.dto';

@Injectable()
export class UserRepository implements InterfaceUserRepository {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<any> {
    const { email, password, role } = dto;
    if (!email || !password)
      return { sucess: false, message: 'Email and password are required' };
    const existEmail = await this.userModel.findOne({ email });
    if (existEmail) return { sucess: false, message: 'Email already exist' };
    if (role === 'admin') {
      const admin = await this.userModel.findOne({ role: 'admin' });
      if (admin) return { sucess: false, message: 'Admin already exist' };
    }
    const createdCat = await this.userModel.create(dto);
    return createdCat;
  }
  async delete(id: string): Promise<any> {
    const exist = await this.userModel.findById(id);
    if (!exist) return { sucess: false, message: 'User not found' };
    const deleted = await this.userModel.findByIdAndDelete(id);
    return deleted;
  }
  async edit(id: string, dto: any): Promise<any> {
    const exist = await this.userModel.findById(id);
    if (!exist) return { sucess: false, message: 'User not found' };
    const updated = await this.userModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return updated;
  }
  async findById(id: string): Promise<any> {
    const exist = await this.userModel.findById(id);
    if (!exist) return { sucess: false, message: 'User not found' };
    return exist;
  }

  async findOne(role: string): Promise<any> {
    const exist = await this.userModel.findOne({ role });
    return exist;
  }

  async findUserExist(email: string): Promise<any> {
    const exist = await this.userModel.findOne({ email });
    if (!exist) return { sucess: false, message: 'User not found' };
    return exist;
  }
  async findAll(): Promise<any> {
    const users = await this.userModel.find({}).exec();
    return users;
  }
}
