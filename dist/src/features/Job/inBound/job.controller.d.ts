import { JobService } from '../core/use-case/job.service';
import { CreateJobDto } from '../core/dto/create-job.dto';
import { UpdateJobDto } from '../core/dto/update-job.dto';
import { Response } from 'express';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    create(createJobDto: CreateJobDto, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(res: Response): Promise<Response<any, Record<string, any>>>;
    findOne(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateJobDto: UpdateJobDto, res: Response): Promise<Response<any, Record<string, any>>>;
    remove(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
