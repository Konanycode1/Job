import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from 'config/db.module';
import { UserModule } from 'features/User/user.module';
import { ConfigModule } from '@nestjs/config';
import { LoggingInterceptor } from 'common/interceptors/logger.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from 'common/auth/auth.module';
import { JobModule } from 'features/Job/job.module';
import { ApplyModule } from 'features/Application/apply.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    AuthModule,
    JobModule,
    ApplyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})

export class AppModule {}
