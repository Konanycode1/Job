import { CreateApplyDto } from 'features/Application/core/dto/create-apply..dto';
import { Application } from 'features/Application/core/schema/application.schema';
import { UpdateApplyDto } from 'features/Application/core/dto/update-apply.dto';
export declare abstract class InterfaceApplyRepository {
    abstract create(dto: CreateApplyDto): Promise<Application>;
    abstract findById(id: string): Promise<Application | null>;
    abstract findByJob(job: string): Promise<Application | null>;
    abstract findByCandidate(candidate: string): Promise<Application | null>;
    abstract findAllApplyByJob(job: string): Promise<Array<Application>>;
    abstract findByJobAndCandidate(job: string, candidate: string): Promise<Application | null>;
    abstract findAllApplyByCandidate(candidate: string): Promise<Array<Application>>;
    abstract findAll(): Promise<Array<Application>>;
    abstract edit(id: string, dto: UpdateApplyDto): Promise<Application>;
    abstract delete(id: string): Promise<any>;
}
