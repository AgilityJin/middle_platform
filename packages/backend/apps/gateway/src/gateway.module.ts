import { APP_ENV } from '@common/configure';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { AuthorsModule } from './graphql/author.module';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: !APP_ENV.isProd,
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'apps/gateway/src/graphql.ts'),
      },
    }),
    AuthorsModule,
    UserModule
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
