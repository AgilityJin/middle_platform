import { LoggerMiddleware } from '@common/middleware';
import { INestApplication } from '@nestjs/common';
import { injectorExpressMiddleware } from '../middleware';
import { injectorSwaggerPlugin } from './swagger.plugin';
import * as compression from 'compression';
import * as helmet from 'helmet';

export const injectorGlobalPlugins = (app: INestApplication) => {
  injectorExpressMiddleware(app)
  injectorSwaggerPlugin(app)
  app.use(new LoggerMiddleware().use)
  app.use(compression())
  app.use(helmet())
}
