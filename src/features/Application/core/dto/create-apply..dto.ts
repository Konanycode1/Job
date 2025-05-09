import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateApplyDto {
  @ApiProperty({
    example: new Date().toISOString(),
    description: 'Date de la candidature',
  })
  @IsOptional()
  appliedAt?: Date;

  @ApiProperty({
    example: 'https://example.com/cv.pdf',
    description: 'URL du CV du candidat',
  })
  cvUrl: string;

  @ApiProperty({
    example: 'jobId123',
    description: "ID de l'offre d'emploi",
  })
  job: string;

  @ApiProperty({
    example: 'candidateId123',
    description: 'ID du candidat qui postule',
  })
  candidate: string;
}
