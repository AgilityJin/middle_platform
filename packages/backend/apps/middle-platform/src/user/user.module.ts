import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission, Role, User } from '@app/db';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Permission])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
