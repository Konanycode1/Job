import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    HttpStatus,
    Res,
  } from '@nestjs/common';
  import { JobService } from '../core/use-case/job.service';
  import { CreateJobDto } from '../core/dto/create-job.dto';
  import { UpdateJobDto } from '../core/dto/update-job.dto';
  import { JwtGuard } from 'common/guard/auth.guard';
  import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { Response } from 'express';
import { Roles } from 'common/decorators/role.decorator';
import { RolesGuard } from 'common/guard/role.guard';
  
  @ApiTags('Jobs')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Controller('jobs')
  export class JobController {
    constructor(private readonly jobService: JobService) {}
  
    @Post()
    @UseGuards(JwtGuard, RolesGuard)
    @Roles('recruteur')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Créer une offre d\'emploi' })
    @ApiResponse({ status: 201, description: 'Job créé avec succès' })
    async create(@Body() createJobDto: CreateJobDto, @Res() res: Response) {
      const result = await this.jobService.create(createJobDto);
      const status = result.success === false ? HttpStatus.BAD_REQUEST : HttpStatus.CREATED;
      return res.status(status).json(result);
    }
  
    @Get()
    @ApiOperation({ summary: 'Liste de toutes les offres' })
    async findAll(@Res() res: Response) {
      const result = await this.jobService.findAll();
      return res.status(200).json({ success: true, data: result });
    }
  
    @Get(':id')
    @UseGuards(JwtGuard, RolesGuard)
    @Roles('recruteur')
    @ApiOperation({ summary: 'Récupérer une offre par ID' })
    async findOne(@Param('id') id: string, @Res() res: Response) {
      const result = await this.jobService.findById(id);
      const status = result.success === false ? HttpStatus.NOT_FOUND : HttpStatus.OK;
      return res.status(status).json(result);
    }
  
    @Patch(':id')
    @UseGuards(JwtGuard, RolesGuard)
    @Roles('recruteur')
    @ApiOperation({ summary: 'Mettre à jour une offre' })
    async update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto, @Res() res: Response) {
      const result = await this.jobService.update(id, updateJobDto);
      const status = result.success === false ? HttpStatus.BAD_REQUEST : HttpStatus.OK;
      return res.status(status).json(result);
    }
  
    @Delete(':id')
    @UseGuards(JwtGuard, RolesGuard)
    @Roles('recruteur')
    @ApiOperation({ summary: 'Supprimer une offre' })
    async remove(@Param('id') id: string, @Res() res: Response) {
      const result = await this.jobService.delete(id);
      const status = result.success === false ? HttpStatus.NOT_FOUND : HttpStatus.OK;
      return res.status(status).json(result);
    }

}
  