import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from 'features/User/core/dto/createUser.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRole } from 'features/User/core/schema/user.schema';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'new-email@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'NouveauMotDePasse123!' })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiPropertyOptional({ enum: UserRole, example: UserRole.RECRUITER })
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
