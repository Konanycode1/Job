import { Module } from '@nestjs/common';
import { JobModule } from 'features/Job/job.module';
import { UserModule } from 'features/User/user.module';
import { ApplyRepository } from './outBound/apply.repository';
import { ApplyService } from './core/use-case/apply.service';
import { applyProviders } from './core/provider/application.provider';
import { dbProviders } from 'config/db.provider';
import { DbModule } from 'config/db.module';
import { ApplyController } from './inBound/apply.controller';

@Module({
  imports: [DbModule, UserModule, JobModule],
  controllers: [
    ApplyController
  ],
  providers: [...dbProviders, ApplyService, ...applyProviders, ApplyRepository],
  exports: [...applyProviders, ApplyService, ApplyRepository],
})
export class ApplyModule {}
