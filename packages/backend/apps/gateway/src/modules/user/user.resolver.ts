import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUser } from '../../graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService
  ) {}
  @Mutation('create')
  async create (@Args('user') user: CreateUser) {
    return this.userService.createUser(user)
  }
}
