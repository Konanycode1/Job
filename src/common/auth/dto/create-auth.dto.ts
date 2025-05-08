import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAuthDto {
  @IsString()
  phone: string;

  @IsString()
  password: string;
}

export class LoginAuthDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Adresse email de l’utilisateur',
  })
  @IsString()
  email: string;

  @ApiProperty({ example: 'MotDePasse123!', description: 'Mot de passe haché' })
  @IsString()
  password: string;
}
