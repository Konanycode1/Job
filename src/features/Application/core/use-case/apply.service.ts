import { Injectable } from '@nestjs/common';
import { ApplyRepository } from 'features/Application/outBound/apply.repository';
import { JobService } from 'features/Job/core/use-case/job.service';
import { UserService } from 'features/User/core/use-case/user.service';
import { CreateApplyDto } from '../dto/create-apply..dto';

@Injectable()
export class ApplyService {
  constructor(
    private readonly applyRepository: ApplyRepository,
    private readonly jobService: JobService,
    private readonly userService: UserService,
  ) {}

  async create(jobId: string, dto: any): Promise<any> {
    const { cvUrl, candiate } = dto;
    if (!cvUrl) return { sucess: false, message: 'CV is required' };
    const [jobExist, candiateExist] = await Promise.all([
      this.jobService.findById(jobId),
      this.userService.findOne(candiate),
    ]);
    if (jobExist === null)
      return { sucess: false, message: 'Job already exist' };
    if (candiateExist === null)
      return { sucess: false, message: 'User already exist' };
    dto.job = jobId;
    dto.candidate = candiate._id;
    dto.appliedAt = new Date();
    return await this.applyRepository.create(dto);
  }

  async findByJob(job: string): Promise<any> {
    const result = await this.applyRepository.findByJob(job);
    if (result === null) return { sucess: false, message: 'Job not found' };
    return result;
  }
  async findById(id: string): Promise<any> {
    return await this.applyRepository.findById(id);
  }
  async findByCandidate(candidate: string): Promise<any> {
    const result = await this.applyRepository.findByCandidate(candidate);
    if (result === null) return { sucess: false, message: 'User not found' };
    return result;
  }

  async findByJobAndCandidate(job: string, candidate: string): Promise<any> {
    const result = await this.applyRepository.findByJobAndCandidate(
      job,
      candidate,
    );
    if (result === null) return { sucess: false, message: 'Apply not found' };
    return result;
  }

  async findAll(): Promise<any> {
    return await this.applyRepository.findAll();
  }

  async edit(id: string, dto: any): Promise<any> {
    const result = await this.applyRepository.edit(id, dto);
    if (result === null) return { sucess: false, message: 'Apply not found' };
    return result;
  }

  async delete(id: string): Promise<any> {
    const result = await this.applyRepository.delete(id);
    if (result === null) return { sucess: false, message: 'Apply not found' };
    return result;
  }
}
