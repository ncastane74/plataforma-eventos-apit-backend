import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnvEventosParticipantesEstadosController } from './controller/env-eventos-participantes-estados.controller';
import { EnvEventosParticipantesEstadosService } from './services/env-eventos-participantes-estados.service';
import { EventosParticipantesEstados } from './entities/env-eventos-participantes-estados.entity';
import { EnvEventosParticipantesController } from './controller/env-eventos-participantes.controller';
import { EnvEventosParticipantesService } from './services/env-eventos-participantes.service';
import { EventosParticipantes } from './entities/env-eventos-participantes.entity';
import { EnvEventosController } from './controller/env-eventos.controller';
import { EnvEventosService } from './services/env-eventos.service';
import { Eventos } from './entities/env-eventos.entity';
import { EnvEventosBitacorasController } from './controller/env-eventos-bitacoras.controller';
import { EnvEventosBitacorasService } from './services/env-eventos-bitacoras.service';
import { EventosBitacoras } from './entities/env-eventos-bitacoras.entity';
import { EnvEventosEstadosController } from './controller/env-eventos-estados.controller';
import { EnvEventosEstadosService } from './services/env-eventos-estados.service';
import { EventosEstados } from './entities/env-eventos-estados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ EventosParticipantesEstados, EventosParticipantes, Eventos, EventosBitacoras, EventosEstados ])],
  controllers: [
    EnvEventosParticipantesEstadosController,
    EnvEventosParticipantesController,
    EnvEventosController,
    EnvEventosBitacorasController,
    EnvEventosEstadosController,
  ],
  providers: [
    EnvEventosEstadosService,
    EnvEventosParticipantesEstadosService,
    EnvEventosParticipantesService,
    EnvEventosService,
    EnvEventosBitacorasService,
  ],
})
export class EventosModule {}
