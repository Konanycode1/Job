import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsMongoId } from 'class-validator';

export class CreateJobDto {
  @ApiProperty({
    example: 'Développeur Full Stack',
    description: "Titre de l'offre d'emploi",
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Nous recherchons un développeur...',
    description: 'Description du poste',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: '609dcd42f2b3a12b8c8fbc5e',
    description: 'ID du recruteur (User)',
    type: String,
  })
  @IsMongoId()
  @IsNotEmpty()
  recruiter: string;

  @ApiProperty({
    example: new Date().toISOString(),
    description: 'Date de création',
    required: false,
  })
  @IsOptional()
  createdAt?: Date;
}
