import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsDateString, IsUrl } from 'class-validator';

export class UpdateApplyDto {
  @ApiProperty({
    example: 'https://example.com/cv_updated.pdf',
    description: 'URL du CV du candidat',
    required: false,
  })
  @IsOptional()
  @IsUrl()
  cvUrl?: string;

  @ApiProperty({
    example: 'jobId123',
    description: "ID de l'offre d'emploi",
    required: false,
  })
  @IsOptional()
  @IsString()
  job?: string;

  @ApiProperty({
    example: 'candidateId123',
    description: 'ID du candidat qui postule',
    required: false,
  })
  @IsOptional()
  @IsString()
  candiate?: string; // Attention à l'orthographe, cela devrait probablement être "candidate"
}
