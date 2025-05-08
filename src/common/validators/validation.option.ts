import {
    HttpException,
    HttpStatus,
    Injectable,
    ValidationError,
    ValidationPipeOptions,
  } from '@nestjs/common';
//   import * as bcrypt from 'bcrypt';
  
  function generateErrors(errors: ValidationError[]) {
    return errors.reduce(
      (accumulator, currentValue) => ({
        ...accumulator,
        [currentValue.property]:
          (currentValue.children?.length ?? 0) > 0
            ? generateErrors(currentValue.children ?? [])
            : Object.values(currentValue.constraints ?? {}).join(', '),
      }),
      {},
    );
  }
  
  export const validationOptions: ValidationPipeOptions = {
    transform: true,
    whitelist: true,
    enableDebugMessages: true,
    disableErrorMessages: false,
    forbidNonWhitelisted: true,
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    exceptionFactory: (errors: ValidationError[]) => {
      return new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: generateErrors(errors),
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    },
  };
  
  // export default validationOptions;
  
