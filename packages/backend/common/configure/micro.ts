import { Permissions } from "./permissions"

export const MICRO_USER = 5001

export namespace MicroService {
  // 用户服务
  export class User {
    static readonly create = {
      cmd: Permissions.USER_CREATE,
      permission: Permissions.USER_CREATE
    }
  }
}
