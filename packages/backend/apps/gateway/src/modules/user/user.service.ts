import { MicroService } from '@common/configure';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MicroApp } from '../../config';
import { CreateUser } from '../../graphql';

@Injectable()
export class UserService {
  constructor (
    @Inject(MicroApp.MiddlePlatform.name)
    private readonly mpClient: ClientProxy
  ) {}

  createUser (data: CreateUser) {
    return this.mpClient.send(MicroService.User.create.cmd, data).toPromise()
  }
}
