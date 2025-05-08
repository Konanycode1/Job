import { ApplyRepository } from 'features/Application/outBound/apply.repository';
import { JobService } from 'features/Job/core/use-case/job.service';
import { UserService } from 'features/User/core/use-case/user.service';
export declare class ApplyService {
    private readonly applyRepository;
    private readonly jobService;
    private readonly userService;
    constructor(applyRepository: ApplyRepository, jobService: JobService, userService: UserService);
    create(jobId: string, dto: any): Promise<any>;
    findByJob(job: string): Promise<any>;
    findById(id: string): Promise<any>;
    findByCandidate(candidate: string): Promise<any>;
    findByJobAndCandidate(job: string, candidate: string): Promise<any>;
    findAll(): Promise<any>;
    edit(id: string, dto: any): Promise<any>;
    delete(id: string): Promise<any>;
}
