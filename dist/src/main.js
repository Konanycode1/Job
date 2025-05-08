"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env_validation_1 = require("./config/env.validation");
const nestjs_logging_interceptor_1 = require("nestjs-logging-interceptor");
const common_1 = require("@nestjs/common");
const error_filters_1 = require("./common/filters/error.filters");
const validation_option_1 = require("./common/validators/validation.option");
const swagger_1 = require("@nestjs/swagger");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        app.useGlobalPipes(new common_1.ValidationPipe(validation_option_1.validationOptions));
        app.useGlobalFilters(new error_filters_1.HttpExceptionFilter());
        app.useGlobalInterceptors(new nestjs_logging_interceptor_1.LoggingInterceptor());
        app.enableVersioning({
            type: common_1.VersioningType.URI,
        });
        app.setGlobalPrefix('api');
        const options = new swagger_1.DocumentBuilder()
            .setTitle('API JOBS')
            .setDescription("Documentation de l'API du projet JOBS")
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
        yield app.listen(env_validation_1.env.PORT);
    });
}
bootstrap();
