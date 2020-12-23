import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { MicroApp } from '../../config';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MicroApp.MiddlePlatform.name,
        transport: MicroApp.MiddlePlatform.transport
      }
    ])
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
