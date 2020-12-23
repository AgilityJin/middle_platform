import { DbModule } from '@app/db';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DbModule,
    UserModule
  ],
})
export class MiddlePlatformModule {}
