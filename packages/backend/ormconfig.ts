const path = require('path')

const config = require(path.join(process.cwd(), `${process.env.NODE_ENV || 'development'}.json`))

module.exports = {
  type: config.DATABASE_TYPE,
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  username: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  migrations: ['libs/db/src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'libs/db/src/migrations',
    entitiesDir: 'libs/db/src/entities',
  },
  synchronize: false,
  autoLoadEntities: true,
};
