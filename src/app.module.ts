import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { EmpresaModule } from './empresa/empresa.module';
import { EventosModule } from './eventos/eventos.module';
import { PersonasModule } from './personas/personas.module';
import { OperariosModule } from './operarios/operarios.module';

@Module({
  imports: [EmpresaModule, EventosModule, PersonasModule, OperariosModule],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
