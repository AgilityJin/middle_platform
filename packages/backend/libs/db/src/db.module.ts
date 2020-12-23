import { ConfigModule, ConfigService, DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_TYPE, DATABASE_USER } from '@app/config';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbService } from './db.service';
import { join } from 'path';

@Global()
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        return {
          type: config.get(DATABASE_TYPE),
          host: config.get(DATABASE_HOST),
          port: config.get(DATABASE_PORT),
          database: config.get(DATABASE_NAME),
          username: config.get(DATABASE_USER),
          password: config.get(DATABASE_PASSWORD),
          migrations: [join(__dirname, './migrations/**/*{.ts,.js}')],
          cli: {
            migrationsDir: "./migrations",
            entitiesDir: "./entities"
          },
          synchronize: false,
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    })
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
