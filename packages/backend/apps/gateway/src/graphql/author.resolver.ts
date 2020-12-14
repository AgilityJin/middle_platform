import { Resolver, Args, Query } from "@nestjs/graphql";

@Resolver('Author')
export class AuthorResolver {
  constructor(
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
}
