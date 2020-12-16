import { MICRO_USER } from "@common/configure";
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AuthorResolver } from "./author.resolver";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'micro-user',
        transport: Transport.TCP,
      },
    ]),
  ],
  providers: [AuthorResolver],
})
export class AuthorsModule {}
