import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { comparePasswords } from 'common/utils/crypt';
import { generateToken, refreshTokenExpired } from 'common/utils/generate';
import e from 'express';
import { CreateUserDto } from 'features/User/core/dto/createUser.dto';
import { UserService } from 'features/User/core/use-case/user.service';
import { UserRepository } from 'features/User/outBound/user.repository';
import { LoginAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
    private readonly userRepository: UserRepository,
  ) {}

  async create(createAuthDto: CreateUserDto) {
    const userExist = await this.userRepository.findUserExist(
      createAuthDto.email,
    );
    if (userExist) {
      return { success: false, message: 'User already exist' };
    }
    const result = await this.userRepository.create(createAuthDto);
    if (!result) {
      return {
        success: false,
        message: 'User already exist or error to create user',
      };
    }
    return { success: true, message: 'User created successfully' };
  }

  async login(createAuthDto: LoginAuthDto) {
    const { email, password } = createAuthDto;
    console.log(email, password);
    // verifier l'existe du telephone et l'email
    if (!email || !password) {
      return { success: false, message: 'Please fill in all fields' };
    }

    const userExist = await this.userRepository.findUserExist(email);
    console.log(userExist);
    if (!userExist) {
      return { success: false, message: 'Email not found.' };
    }

    const [verifyPass] = await Promise.all([
      comparePasswords(password, userExist.password),
    ]);

    if (!verifyPass) {
      return { success: false, message: 'Invalid password.' };
    }

    const refreshToken = refreshTokenExpired(
      { id: userExist.id, email: userExist.email, role: userExist.role },
      this.configService,
    );

    const accessToken = generateToken(
      { id: userExist.id, email: userExist.email, role: userExist.role },
      this.configService,
    );
    return {
      success: true,
      message: 'valid connection !!!!',
      accessToken,
      refreshToken,
    };
  }

  async getProfile(userId: string) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      return {
        success: false,
        message: 'User not found.',
      };
    }
    return {
      success: true,
      user,
    };
  }
}
