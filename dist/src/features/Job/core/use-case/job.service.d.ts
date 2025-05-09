import { JobRepository } from 'features/Job/outBound/job.repository';
import { ApplyDto, CreateJobDto } from 'features/Job/core/dto/create-job.dto';
import { UserService } from 'features/User/core/use-case/user.service';
import { UpdateJobDto } from '../dto/update-job.dto';
import { ApplyService } from 'features/Application/core/use-case/apply.service';
export declare class JobService {
    private readonly jobRepository;
    private readonly userService;
    private readonly applyService;
    constructor(jobRepository: JobRepository, userService: UserService, applyService: ApplyService);
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
    applyJob(idJob: string, candidate: string, dto: ApplyDto): Promise<{
        sucess: boolean;
        message: string;
        success?: undefined;
        data?: undefined;
    } | {
        success: boolean;
        message: any;
        sucess?: undefined;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        sucess?: undefined;
        message?: undefined;
    }>;
    jobByRecruiter(idJob: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message?: undefined;
    }>;
    jobByCandiate(idCandiate: string): Promise<{
        success: boolean;
        message: string;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
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
