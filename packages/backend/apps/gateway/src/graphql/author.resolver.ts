import { Inject } from "@nestjs/common";
import { Resolver, Args, Query } from "@nestjs/graphql";
import { ClientProxy } from "@nestjs/microservices";

@Resolver('Author')
export class AuthorResolver {
  constructor(
    @Inject('micro-user') private readonly client: ClientProxy,
  ) {}

  @Query('findUser')
  findUser(@Args('id') id: number) {
    return {
      id,
      firstName: 'test',
      lastName: 'test2',
      posts: ['test']
    }
  }

  @Query('getUsers')
  async getUsers(
    @Args('page') page: number,
    @Args('size') size: number
  ) {
    const d = await this.client.send({ cmd: 'user_list' }, { page, size })
    return d
  }
}
