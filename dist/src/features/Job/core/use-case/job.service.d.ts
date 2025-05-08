import { JobRepository } from 'features/Job/outBound/job.repository';
import { CreateJobDto } from 'features/Job/core/dto/create-job.dto';
import { UserService } from 'features/User/core/use-case/user.service';
import { UpdateJobDto } from '../dto/update-job.dto';
export declare class JobService {
    private readonly jobRepository;
    private readonly userService;
    constructor(jobRepository: JobRepository, userService: UserService);
    create(dto: CreateJobDto): Promise<any>;
    findById(id: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: import("../schema/job.schema").Job;
        message?: undefined;
    }>;
    findOne(title: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: import("../schema/job.schema").Job;
        message?: undefined;
    }>;
    findAll(): Promise<import("../schema/job.schema").Job[]>;
    update(id: string, dto: UpdateJobDto): Promise<{
        sucess: boolean;
        message: string;
        success?: undefined;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        sucess?: undefined;
        message?: undefined;
    }>;
    delete(id: string): Promise<any>;
}
