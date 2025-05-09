import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    Patch,
    Delete,
    UseGuards,
    Request,
    Res,
  } from '@nestjs/common';
  import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ApplyService } from '../core/use-case/apply.service';
import { CreateApplyDto } from '../core/dto/create-apply..dto';
import { JwtGuard } from 'common/guard/auth.guard';
import { RolesGuard } from 'common/guard/role.guard';
import { Roles } from 'common/decorators/role.decorator';
import { Response } from 'express';

  
  @ApiTags('Applies')
  @Controller('me')
  export class ApplyController {
    constructor(private readonly applyService: ApplyService) {}
  
    // @Post(':jobId')
    // @ApiOperation({ summary: 'Apply for a job' })
    // @ApiResponse({ status: 201, description: 'Application created successfully.' })
    // @ApiResponse({ status: 400, description: 'Missing or invalid data.' })
    // async create(@Param('jobId') jobId: string, @Body() dto: CreateApplyDto) {
    //   return await this.applyService.create( dto);
    // }
  
    @Get('/applications')
    @UseGuards(JwtGuard, RolesGuard)
    @Roles('candidat')
    @ApiOperation({ summary: 'Get all applications by user ID Candidat' })
    @ApiBearerAuth()
    async findAllApplyByUser(
      @Res() res: Response,
      @Request() req
    ): Promise<Response> {
      const {id} = req.user
      const result = await this.applyService.findAllApplyByCandidate(id);
      return res.status(200).json({ success: true, data: result });
    }

  
    // @Get('job/:jobId')
    // @ApiOperation({ summary: 'Get applications by job ID' })
    // async findByJob(@Param('jobId') job: string) {
    //   return await this.applyService.findByJob(job);
    // }
  
    // @Get('candidate/:candidateId')
    // @ApiOperation({ summary: 'Get applications by candidate ID' })
    // async findByCandidate(@Param('candidateId') candidate: string) {
    //   return await this.applyService.findByCandidate(candidate);
    // }
  
    // @Get(':id')
    // @ApiOperation({ summary: 'Get application by ID' })
    // async findById(@Param('id') id: string) {
    //   return await this.applyService.findById(id);
    // }
  
    // @Get('job/:jobId/candidate/:candidateId')
    // @ApiOperation({ summary: 'Get application by job and candidate' })
    // async findByJobAndCandidate(
    //   @Param('jobId') job: string,
    //   @Param('candidateId') candidate: string,
    // ) {
    //   return await this.applyService.findByJobAndCandidate(job, candidate);
    // }
  
    // @Patch(':id')
    // @ApiOperation({ summary: 'Edit an application' })
    // async edit(@Param('id') id: string, @Body() dto: any) {
    //   return await this.applyService.edit(id, dto);
    // }
  
    // @Delete(':id')
    // @ApiOperation({ summary: 'Delete an application' })
    // async delete(@Param('id') id: string) {
    //   return await this.applyService.delete(id);
    // }
  }
  