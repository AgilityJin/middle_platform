const path = require('path')

const IS_PROD = process.env.NODE_ENV === 'production'

const prefixPath = (str) => path.join(__dirname, process.env.TYPEORM_CLI ? '' : 'dist', str)
const config = require(path.join(process.cwd(), `${IS_PROD ? 'production' : 'development'}.json`))

module.exports = {
  type: config.DATABASE_TYPE,
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  username: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  entities: [prefixPath('libs/db/src/entities/*.entity{.ts,.js}')],
  migrations: [prefixPath('libs/db/src/migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'libs/db/src/migrations',
    entitiesDir: 'libs/db/src/entities',
  },
  synchronize: false,
  // autoLoadEntities: true,
};
