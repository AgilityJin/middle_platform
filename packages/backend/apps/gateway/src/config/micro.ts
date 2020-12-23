import { Transport } from "@nestjs/microservices"

class MiddlePlatform {
  readonly name = 'MICRO_MIDDLE_PLATFORM'
  readonly transport = Transport.TCP
}

export class MicroApp {
  static MiddlePlatform = new MiddlePlatform()
}
