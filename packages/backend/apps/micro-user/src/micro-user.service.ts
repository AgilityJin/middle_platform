import { ConfigService, DATABASE_HOST } from '@app/config';
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
  constructor (
    private configService: ConfigService
  ) {}
  async getUserList(): Promise<User[]> {
    return [
      {
        uuid: 'fdalsfdkfnsdkaflsdfnsdf',
        nickname: this.configService.get(DATABASE_HOST),
        lastLoginTime: Date.now()
      }
    ];
  }
}
