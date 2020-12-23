import { MicroService } from '@common/configure';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserCreateDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  /**
   * @name 创建用户
   *
   * @param {UserCreateDto} data
   * @returns
   * @memberof UserController
   */
  @MessagePattern({ cmd: MicroService.User.create.cmd })
  async create (data: UserCreateDto) {
    return this.userService.userCreate(data)
  }
}
