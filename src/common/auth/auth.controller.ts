import { Controller, Get, Post, Body, Param, Delete, Res, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { CreateAuthDto, LoginAuthDto } from 'common/auth/dto/create-auth.dto';
import { JwtGuard } from 'common/guard/auth.guard';
import { CreateUserDto } from 'features/User/core/dto/createUser.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
 // Crée ce fichier si nécessaire

@ApiTags('Auth') // Groupe Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 200, description: 'User registered successfully'})
  @ApiResponse({ status: 400, description: 'Validation failed or email already exists' })
  async create(
    @Body() createAuthDto: CreateUserDto,
  ): Promise<any> {
    const result = await this.authService.create(createAuthDto);
    if(result.success === false) return result;
    return result;
  }

  @Post('/login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({ type: LoginAuthDto })
  @ApiResponse({ status: 200, description: 'Login successful with token' })
  @ApiResponse({ status: 400, description: 'Invalid credentials' })
  async login(
    @Body() createAuthDto: LoginAuthDto,
  ): Promise<any> {
    const result = await this.authService.login(createAuthDto);
    return result;
  }

  @UseGuards(JwtGuard)
  @Get('/profile')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiBearerAuth()
  @ApiResponse({ status: 200, description: 'User profile returned', })
  @ApiResponse({ status: 400, description: 'User not found or token invalid' })
  async getProfile(
    @Request() req: any
  ): Promise<any> {
    const result = await this.authService.getProfile(req.user.id);
    if(result.success === false) return result;
    return result;
  }
}
