import { Module } from '@nestjs/common';
import { dbProviders } from 'config/db.provider';

@Module({
  providers: [...dbProviders],
  exports: [...dbProviders],
})
export class DbModule {}