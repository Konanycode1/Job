import { Inject, Injectable } from '@nestjs/common';
import { InterfaceApplyRepository } from '../core/interface/apply.repository.interface';
import { Application } from '../core/schema/application.schema';
import { Model } from 'mongoose';

@Injectable()
export class ApplyRepository implements InterfaceApplyRepository {
  constructor(
    @Inject('APPLICATION_MODEL')
    private applyModel: Model<Application>,
  ) {}

  async create(dto: any): Promise<Application> {
    return await this.applyModel.create(dto);
  }

  async findById(id: string): Promise<Application | null> {
    return await this.applyModel
      .findById(id)
      .populate('job')
      .populate('candidate')
      .exec();
  }

  async findByJob(job: string): Promise<Application | null> {
    return await this.applyModel
      .findOne({ job: job })
      .populate('candidate')
      .populate('job')
      .exec();
  }

  async findByCandidate(candidate: string): Promise<Application | null> {
    return await this.applyModel
      .findOne({ candidate: candidate })
      .populate('candidate')
      .populate('job')
      .exec();
  }

  async findByJobAndCandidate(
    job: string,
    candidate: string,
  ): Promise<Application | null> {
    return await this.applyModel
      .findOne({ job: job, candidate: candidate })
      .populate('candidate')
      .populate('job')
      .exec();
  }

  async findAll(): Promise<Application[]> {
    return await this.applyModel
      .find({})
      .populate('candidate')
      .populate('job')
      .exec();
  }

  async edit(id: string, dto: any): Promise<any> {
    return await this.applyModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async delete(id: string): Promise<any> {
    return await this.applyModel.deleteOne({ _id: id });
  }
}
