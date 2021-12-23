import { Module } from '@nestjs/common';

import { EnvEventosParticipantesEstadosController } from './controller/env-eventos-participantes-estados.controller';
import { EnvEventosParticipantesController } from './controller/env-eventos-participantes.controller';
import { EnvEventosController } from './controller/env-eventos.controller';
import { EnvEventosVitacorasController } from './controller/env-eventos-vitacoras.controller';
import { EnvEventosEstadosController } from './controller/env-eventos-estados.controller';
import { EnvEventosEstadosService } from './services/env-eventos-estados.service';
import { EnvEventosParticipantesEstadosService } from './services/env-eventos-participantes-estados.service';
import { EnvEventosParticipantesService } from './services/env-eventos-participantes.service';
import { EnvEventosService } from './services/env-eventos.service';
import { EnvEventosVitacorasService } from './services/env-eventos-vitacoras.service';

@Module({
    controllers: [ EnvEventosParticipantesEstadosController, EnvEventosParticipantesController, EnvEventosController, EnvEventosVitacorasController, EnvEventosEstadosController ],
    providers: [ EnvEventosEstadosService, EnvEventosParticipantesEstadosService, EnvEventosParticipantesService, EnvEventosService, EnvEventosVitacorasService ],
})
export class EventosModule {}
