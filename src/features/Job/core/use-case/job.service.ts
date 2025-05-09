import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JobRepository } from 'features/Job/outBound/job.repository';
import { ApplyDto, CreateJobDto } from 'features/Job/core/dto/create-job.dto';
import { UserService } from 'features/User/core/use-case/user.service';
import { UpdateJobDto } from '../dto/update-job.dto';
import { ApplyService } from 'features/Application/core/use-case/apply.service';

@Injectable()
export class JobService {
  constructor(
    private readonly jobRepository: JobRepository,
    private readonly userService: UserService,
    @Inject(forwardRef(() => ApplyService))
    private readonly applyService: ApplyService,
  ) {}

  async create(dto: CreateJobDto): Promise<any> {
    const { recruiter, title, description } = dto;
    if ( !title || !description)
      return {
        sucess: false,
        message: 'Recruiter, title and description are required',
      };
    const userExist = await this.userService.findOne(recruiter);
    if (userExist.success === false) {
      return { success: false, message: 'User not found' };
    }
    const { role } = userExist;
    if (role !== 'recruteur') {
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

  async applyJob (idJob: string, candidate: string, dto: ApplyDto) {
    const { cvUrl } = dto;
    if (!cvUrl) return { sucess: false, message: 'CV is required' };
    const newDto = {
      cvUrl,
      job: idJob,
      candidate
    };
    const job  = await this.applyService.create(newDto);
    if (!job) {
      return { success: false, message: job.message };
    }
    return { success: true, data: job };
  }


  async jobByRecruiter(idJob: string) {
    const job = await this.applyService.findAllApplyByJob(idJob);
    if (job === null) {
      return { success: false, message: 'Job not found' };
    }
    return { success: true, data: job };
  }
  

  async jobByCandiate(idCandiate: string) {
    const job = await this.applyService.findAllApplyByCandidate(idCandiate);
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
