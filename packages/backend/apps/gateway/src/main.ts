import { MICRO_USER } from '@common/configure';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { API_PREFIX, SERVER_PORT } from './config';
import { GatewayModule } from './gateway.module';
import { injectorGlobalPlugins } from './plugins';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  injectorGlobalPlugins(app)

  app.setGlobalPrefix(API_PREFIX);

  await app.listen(SERVER_PORT);
}
bootstrap();
