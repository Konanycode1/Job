import { ApplyService } from '../core/use-case/apply.service';
import { CreateApplyDto } from '../core/dto/create-apply..dto';
export declare class ApplyController {
    private readonly applyService;
    constructor(applyService: ApplyService);
    create(jobId: string, dto: CreateApplyDto): Promise<any>;
    findAll(): Promise<any>;
    findByJob(job: string): Promise<any>;
    findByCandidate(candidate: string): Promise<any>;
    findById(id: string): Promise<any>;
    findByJobAndCandidate(job: string, candidate: string): Promise<any>;
    edit(id: string, dto: any): Promise<any>;
    delete(id: string): Promise<any>;
}
