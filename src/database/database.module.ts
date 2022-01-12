import { Module, Global } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

const API_KEY = '123456';
const API_KEY_PROD = 'PROD123456';


//client.query('SELECT * FROM tasks', (err, res) => {
//  console.error(err);
//  console.log(res.rows);
//});

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (ConfigService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = ConfigService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useFactory: (ConfigService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = ConfigService.postgres;
        const client = new Client ({
          user,
          host,
          database: dbName,
          password,
          port,
        })        
        client.connect();
        return client;
      },
      inject: [config.KEY]
    },
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
