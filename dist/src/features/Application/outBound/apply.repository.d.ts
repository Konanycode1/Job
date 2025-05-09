import { InterfaceApplyRepository } from '../core/interface/apply.repository.interface';
import { Application } from '../core/schema/application.schema';
import { Model } from 'mongoose';
export declare class ApplyRepository implements InterfaceApplyRepository {
    private applyModel;
    constructor(applyModel: Model<Application>);
    create(dto: any): Promise<Application>;
    findById(id: string): Promise<Application | null>;
    findByJob(job: string): Promise<Application | null>;
    findByCandidate(candidate: string): Promise<Application | null>;
    findByJobAndCandidate(job: string, candidate: string): Promise<Application | null>;
    findAll(): Promise<Application[]>;
    findAllApplyByJob(job: string): Promise<Application[]>;
    findAllApplyByCandidate(candidate: string): Promise<Application[]>;
    edit(id: string, dto: any): Promise<any>;
    delete(id: string): Promise<any>;
}
