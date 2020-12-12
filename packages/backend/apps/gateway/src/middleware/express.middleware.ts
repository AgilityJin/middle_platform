import { INestApplication } from "@nestjs/common";
import express from 'express'

export const injectorExpressMiddleware = (app: INestApplication) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
}
