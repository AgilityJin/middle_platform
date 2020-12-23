import { MicroService } from '@common/configure';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MicroApp } from '../../config';

@Injectable()
export class UserService {
  constructor (
    @Inject(MicroApp.MiddlePlatform.name)
    private readonly mpClient: ClientProxy
  ) {}

  createUser (data: any) {
    return this.mpClient.send(MicroService.User.create.cmd, data).subscribe(result => {
      console.log(result)
      return result
    })
  }
}
