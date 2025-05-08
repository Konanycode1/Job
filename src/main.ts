/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'config/env.validation';
import { LoggingInterceptor } from 'nestjs-logging-interceptor';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { HttpExceptionFilter } from 'common/filters/error.filters';
import { validationOptions } from 'common/validators/validation.option';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('API JOBS')
    .setDescription("Documentation de l'API du projet JOBS")
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(env.PORT);
}

//Test sur la branche Diom

bootstrap();
