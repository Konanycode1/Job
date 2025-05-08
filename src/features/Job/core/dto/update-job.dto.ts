import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsMongoId } from 'class-validator';

export class UpdateJobDto {
  @ApiPropertyOptional({ example: 'Développeur Full Stack', description: 'Titre de l\'offre d\'emploi' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ example: 'Nous recherchons un développeur...', description: 'Description du poste' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: '609dcd42f2b3a12b8c8fbc5e', description: 'ID du recruteur (User)', type: String })
  @IsMongoId()
  @IsOptional()
  recruiter?: string;

  @ApiPropertyOptional({ example: new Date().toISOString(), description: 'Date de mise à jour' })
  @IsOptional()
  createdAt?: Date;
}
