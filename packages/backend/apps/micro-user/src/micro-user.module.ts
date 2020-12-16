import { Module } from '@nestjs/common';
import { MicroUserController } from './micro-user.controller';
import { MicroUserService } from './micro-user.service';

@Module({
  imports: [],
  controllers: [MicroUserController],
  providers: [MicroUserService],
})
export class MicroUserModule {}
