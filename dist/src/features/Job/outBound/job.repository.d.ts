import { Model } from "mongoose";
import { Job } from "../core/schema/job.schema";
import { InterfaceJobRepository } from "../core/interface/job.repository.interface";
import { CreateJobDto } from "../core/dto/create-job.dto";
export declare class JobRepository implements InterfaceJobRepository {
    private jobModel;
    constructor(jobModel: Model<Job>);
    create(dto: CreateJobDto): Promise<Job>;
    findOne(title: string): Promise<Job | null>;
    findAll(): Promise<Job[]>;
    findById(id: string): Promise<Job | null>;
    edit(id: string, dto: any): Promise<any>;
    delete(id: string): Promise<any>;
}
