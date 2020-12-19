import { ConfigModule } from '@app/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MicroUserController } from './micro-user.controller';
import { MicroUserService } from './micro-user.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forRoot(), TypeOrmModule.forFeature([])],
  controllers: [MicroUserController],
  providers: [MicroUserService],
})
export class MicroUserModule {}
