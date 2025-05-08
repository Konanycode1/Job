import { Module } from "@nestjs/common";
import { User } from "features/User/core/schema/user.schema";
import { UserModule } from "features/User/user.module";
import { JobController } from "./inBound/job.controller";
import { DbModule } from "config/db.module";
import { JobService } from "features/Job/core/use-case/job.service";
import { dbProviders } from "config/db.provider";
import { jobProviders } from "features/Job/core/provider/job.provider";
import { JobRepository } from "./outBound/job.repository";

@Module({
    imports: [
        DbModule,
        UserModule,
    ],
    controllers: [
        JobController
    ],
    providers: [
        JobService,
        ...dbProviders,
        JobRepository,
        ...jobProviders
    ],
    exports: [
        ...jobProviders,
        JobService,
        JobRepository

    ]
})
export class JobModule {}