import { ApplyService } from '../core/use-case/apply.service';
import { Response } from 'express';
export declare class ApplyController {
    private readonly applyService;
    constructor(applyService: ApplyService);
    findAllApplyByUser(res: Response, req: any): Promise<Response>;
}
