import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaginationRequest } from '@types';
import { MicroUserService } from './micro-user.service';

@Controller()
export class MicroUserController {
  constructor(private readonly microUserService: MicroUserService) {}

  @MessagePattern({ cmd: 'user_list' })
  async users(query?: PaginationRequest) {
    return this.microUserService.getUserList();
  }
}
