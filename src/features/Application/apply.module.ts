import { forwardRef, Module } from '@nestjs/common';
import { JobModule } from 'features/Job/job.module';
import { UserModule } from 'features/User/user.module';
import { ApplyRepository } from 'features/Application/outBound/apply.repository';
import { ApplyService } from 'features/Application/core/use-case/apply.service';
import { applyProviders } from 'features/Application/core/provider/application.provider';
import { dbProviders } from 'config/db.provider';
import { DbModule } from 'config/db.module';
import { ApplyController } from 'features/Application/inBound/apply.controller';

@Module({
  imports: [DbModule, UserModule, forwardRef(() => JobModule)],
  controllers: [
    ApplyController
  ],
  providers: [...dbProviders, ApplyService, ...applyProviders, ApplyRepository],
  exports: [...applyProviders, ApplyService, ApplyRepository],
})
export class ApplyModule {}
