import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApplyService } from '../core/use-case/apply.service';
import { CreateApplyDto } from '../core/dto/create-apply..dto';

  
  @ApiTags('Applies')
  @Controller('applies')
  export class ApplyController {
    constructor(private readonly applyService: ApplyService) {}
  
    @Post(':jobId')
    @ApiOperation({ summary: 'Apply for a job' })
    @ApiResponse({ status: 201, description: 'Application created successfully.' })
    @ApiResponse({ status: 400, description: 'Missing or invalid data.' })
    async create(@Param('jobId') jobId: string, @Body() dto: CreateApplyDto) {
      return await this.applyService.create(jobId, dto);
    }
  
    @Get()
    @ApiOperation({ summary: 'Get all applications' })
    async findAll() {
      return await this.applyService.findAll();
    }
  
    @Get('job/:jobId')
    @ApiOperation({ summary: 'Get applications by job ID' })
    async findByJob(@Param('jobId') job: string) {
      return await this.applyService.findByJob(job);
    }
  
    @Get('candidate/:candidateId')
    @ApiOperation({ summary: 'Get applications by candidate ID' })
    async findByCandidate(@Param('candidateId') candidate: string) {
      return await this.applyService.findByCandidate(candidate);
    }
  
    @Get(':id')
    @ApiOperation({ summary: 'Get application by ID' })
    async findById(@Param('id') id: string) {
      return await this.applyService.findById(id);
    }
  
    @Get('job/:jobId/candidate/:candidateId')
    @ApiOperation({ summary: 'Get application by job and candidate' })
    async findByJobAndCandidate(
      @Param('jobId') job: string,
      @Param('candidateId') candidate: string,
    ) {
      return await this.applyService.findByJobAndCandidate(job, candidate);
    }
  
    @Patch(':id')
    @ApiOperation({ summary: 'Edit an application' })
    async edit(@Param('id') id: string, @Body() dto: any) {
      return await this.applyService.edit(id, dto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'Delete an application' })
    async delete(@Param('id') id: string) {
      return await this.applyService.delete(id);
    }
  }
  