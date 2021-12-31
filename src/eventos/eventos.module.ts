import { Module } from '@nestjs/common';

import { EnvEventosParticipantesEstadosController } from './controller/env-eventos-participantes-estados.controller';
import { EnvEventosParticipantesController } from './controller/env-eventos-participantes.controller';
import { EnvEventosController } from './controller/env-eventos.controller';
import { EnvEventosBitacorasController } from './controller/env-eventos-bitacoras.controller';
import { EnvEventosEstadosController } from './controller/env-eventos-estados.controller';
import { EnvEventosEstadosService } from './services/env-eventos-estados.service';
import { EnvEventosParticipantesEstadosService } from './services/env-eventos-participantes-estados.service';
import { EnvEventosParticipantesService } from './services/env-eventos-participantes.service';
import { EnvEventosService } from './services/env-eventos.service';
import { EnvEventosBitacorasService } from './services/env-eventos-bitacoras.service';

@Module({
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
