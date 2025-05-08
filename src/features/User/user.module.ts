import { Module } from '@nestjs/common';
import { DbModule } from 'config/db.module';
import { UserController } from './inBound/user.controller';
import { UserService } from './core/use-case/user.service';
import { dbProviders } from 'config/db.provider';
import { UserRepository } from './outBound/user.repository';
import { userProviders } from 'features/User/core/provider/user.provider';

@Module({
  imports: [DbModule],
  controllers: [UserController],
  providers: [UserService, ...dbProviders, UserRepository, ...userProviders],
  exports: [...userProviders, UserService, UserRepository],
})
export class UserModule {}
