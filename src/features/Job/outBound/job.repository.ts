import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Job } from '../core/schema/job.schema';
import { InterfaceJobRepository } from '../core/interface/job.repository.interface';
import { CreateJobDto } from '../core/dto/create-job.dto';
import { populate } from 'dotenv';

@Injectable()
export class JobRepository implements InterfaceJobRepository {
  constructor(
    @Inject('JOB_MODEL')
    private jobModel: Model<Job>,
  ) {}

  async create(dto: CreateJobDto): Promise<Job> {
    return await this.jobModel.create(dto);
  }

  async findOne(title: string): Promise<Job | null> {
    const job = await this.jobModel.findOne({ title }).populate('recruiter');
    return job;
  }
  async findAll(): Promise<Job[]> {
    return await this.jobModel.find({}).populate('recruiter').exec();
  }

  async findById(id: string): Promise<Job | null> {
    return await this.jobModel.findById(id).populate('recruiter').exec();
  }
  async edit(id: string, dto: any): Promise<any> {
    const updated = await this.jobModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return updated;
  }

  async delete(id: string): Promise<any> {
    const deleted = await this.jobModel.findByIdAndDelete(id);
    return deleted;
  }
}
