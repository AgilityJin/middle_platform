import { Injectable } from '@nestjs/common';

// test
export interface User {
  uuid: string
  nickname?: string
  role?: string
  lastLoginTime?: any // redis
}

@Injectable()
export class MicroUserService {
  async getUserList(): Promise<User[]> {
    return [
      {
        uuid: 'fdalsfdkfnsdkaflsdfnsdf',
        nickname: 'test',
        lastLoginTime: Date.now()
      }
    ];
  }
}
