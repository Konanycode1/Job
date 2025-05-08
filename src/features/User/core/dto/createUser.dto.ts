import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserRole } from 'features/User/core/schema/user.schema';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'Adresse email de l’utilisateur' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'MotDePasse123!', description: 'Mot de passe haché' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    enum: UserRole,
    example: UserRole.CANDIDATE,
    description: 'Rôle de l’utilisateur',
    default: UserRole.CANDIDATE,
  })
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
