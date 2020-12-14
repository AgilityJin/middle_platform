import { INestApplication } from "@nestjs/common";
import { json, urlencoded } from 'express'

export const injectorExpressMiddleware = (app: INestApplication) => {
  app.use(json())
  app.use(urlencoded({ extended: true }))
}
