import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { EventosModule } from './eventos/eventos.module';
import { PersonasModule } from './personas/personas.module';
import { OperariosModule } from './operarios/operarios.module';
import { DatabaseModule } from './database/database.module';
import { environments } from './environments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV]  || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    EmpresaModule,
    EventosModule,
    PersonasModule,
    OperariosModule,
    DatabaseModule
  ],
  controllers: [ AppController ],
  providers: [ 
    AppService,
  ],
})
export class AppModule {}
