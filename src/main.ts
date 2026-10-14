import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs.js';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.enableCors({
    origin: '*', methods:'GET, HEAD, PUT, PATCH, POST, DELETE',allowedHeaders:'Content - Type, Accept, Authorization'});
    
  app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    //await app.listen(process.env.PORT ?? 3000);
    await app.listen(envs.port);
    console.log(`Server running on port ${envs.port}`);


  }
await bootstrap();
