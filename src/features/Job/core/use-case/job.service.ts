import { Injectable } from '@nestjs/common';
import { JobRepository } from 'features/Job/outBound/job.repository';
import { CreateJobDto } from 'features/Job/core/dto/create-job.dto';
import { UserService } from 'features/User/core/use-case/user.service';
import { UpdateJobDto } from '../dto/update-job.dto';

@Injectable()
export class JobService {
  constructor(
    private readonly jobRepository: JobRepository,
    private readonly userService: UserService,
  ) {}

  async create(dto: CreateJobDto): Promise<any> {
    const { recruiter, title, description } = dto;
    if (!recruiter || !title || !description)
      return {
        sucess: false,
        message: 'Recruiter, title and description are required',
      };
    const userExist = await this.userService.findOne(recruiter);
    if (!userExist) {
      return { success: false, message: 'User not found' };
    }
    const { role } = userExist;
    if (role !== 'recruiter') {
      return { success: false, message: 'User is not recruiter' };
    }
    return await this.jobRepository.create(dto);
  }

  async findById(id: string) {
    const job = await this.jobRepository.findById(id);
    if (job === null) {
      return { success: false, message: 'Job not found' };
    }
    return { success: true, data: job };
  }

  async findOne(title: string) {
    const job = await this.jobRepository.findOne(title);
    if (job === null) {
      return { success: false, message: 'Job not found' };
    }
    return { success: true, data: job };
  }

  async findAll() {
    return await this.jobRepository.findAll();
  }

  async update(id: string, dto: UpdateJobDto) {
    const exist = await this.jobRepository.findById(id);
    if (!exist) return { sucess: false, message: 'Job not found' };
    const updated = await this.jobRepository.edit(id, dto);
    if (!updated) return { sucess: false, message: 'Job not updated' };
    return { success: true, data: updated };
  }

  async delete(id: string) {
    const exist = await this.jobRepository.findById(id);
    if (!exist) return { sucess: false, message: 'Job not found' };
    const deleted = await this.jobRepository.delete(id);
    return deleted;
  }
}
