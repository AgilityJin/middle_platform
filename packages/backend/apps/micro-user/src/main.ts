import { MICRO_USER } from '@common/configure';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MicroUserModule } from './micro-user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicroUserModule,
    {
      transport: Transport.TCP,
    }
  );
  await app.listen(() => console.log('Microservice User is listening'));
}
bootstrap();
