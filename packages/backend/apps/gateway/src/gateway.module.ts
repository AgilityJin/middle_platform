import { APP_ENV } from '@common/configure';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { AuthorsModule } from './graphql/author.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: APP_ENV.isProd,
      typePaths: ['./**/*.graphql'],
    }),
    AuthorsModule
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
