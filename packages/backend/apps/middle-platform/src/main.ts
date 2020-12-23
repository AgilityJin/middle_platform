import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MiddlePlatformModule } from './middle-platform.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MiddlePlatformModule,
    {
      transport: Transport.TCP,
    }
  );

  await app.listen(() => console.log('Microservice Middle_Platform is listening'));
}

bootstrap();
