import { CreateJobDto } from '../dto/create-job.dto';
import { UpdateJobDto } from '../dto/update-job.dto';
import { Job } from '../schema/job.schema';

export abstract class InterfaceJobRepository {
  abstract create(dto: CreateJobDto): Promise<Job>;
  abstract findById(id: string): Promise<Job | null>;
  abstract findOne(title: string): Promise<Job | null>;
  abstract findAll(): Promise<Array<Job>>;
  abstract edit(id: string, dto: UpdateJobDto): Promise<Job>;
  abstract delete(id: string): Promise<any>;
}
