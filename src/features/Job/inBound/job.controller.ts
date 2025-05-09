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
  Request
} from '@nestjs/common';
import { JobService } from '../core/use-case/job.service';
import { ApplyDto, CreateJobDto } from '../core/dto/create-job.dto';
import { UpdateJobDto } from '../core/dto/update-job.dto';
import { JwtGuard } from 'common/guard/auth.guard';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
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
  @ApiOperation({ summary: "Create a job offer" })
  @ApiResponse({ status: 201, description: 'Job successfully created' })
  async create(
    @Body() createJobDto: CreateJobDto, 
    @Res() res: Response,
    @Request() req
  ) {
    const { id } = req.user;
    createJobDto.recruiter = id
    const result = await this.jobService.create(createJobDto);
    const status =
      result.success === false ? HttpStatus.BAD_REQUEST : HttpStatus.CREATED;
    return res.status(status).json(result);
  }


  @Post('/:id/apply')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('candidat')
  @ApiBearerAuth()
  @ApiOperation({ summary: "Apply for a job" })
  @ApiResponse({ status: 201, description: 'Request sent successfully' })
  async applyJob(
    @Body() createJobDto: ApplyDto,
    @Res() res: Response,
    @Param('id') id: string,
    @Request() req

    ) {
    const { id : userId} = req.user
    console.log(createJobDto);
    const result = await this.jobService.applyJob(id,userId,createJobDto);
    const status =
      result.success === false ? HttpStatus.BAD_REQUEST : HttpStatus.CREATED;
    return res.status(status).json(result);
  }

  @Get()
  @ApiOperation({ summary: 'List of all offers' })
  async findAll(@Res() res: Response) {
    const result = await this.jobService.findAll();
    return res.status(200).json({ success: true, data: result });
  }

  @Get(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('recruteur')
  @ApiOperation({ summary: 'Retrieve an offer by ID' })
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.jobService.findById(id);
    const status =
      result.success === false ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    return res.status(status).json(result);
  }

  @Get(':id/applications')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('recruteur')
  @ApiOperation({ summary: "Retrieve all applicants by recruiter's offer" })
  async applyByJob(
    @Param('id') id: string, 
    @Res() res: Response
  ) {
    const result = await this.jobService.jobByRecruiter(id);
    const status = result.success === false ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    console.log(result);
    return res.status(status).json(result);
  }

  @Patch(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('recruteur')
  @ApiOperation({ summary: 'Update an offer' })
  async update(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto,
    @Res() res: Response,
  ) {
    const result = await this.jobService.update(id, updateJobDto);
    const status =
      result.success === false ? HttpStatus.BAD_REQUEST : HttpStatus.OK;
    return res.status(status).json(result);
  }

  @Delete(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('recruteur')
  @ApiOperation({ summary: 'delete an offer' })
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.jobService.delete(id);
    const status =
      result.success === false ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    return res.status(status).json(result);
  }
}
