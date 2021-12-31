import { Module } from '@nestjs/common';

import { ExtInstitucionesController } from './controller/ext-instituciones.controller';
import { ExtTipoDocumentosController } from './controller/ext-tipo-documentos.controller';
import { PerPersonasController } from './controller/per-personas.controller';
import { PerPersonasInstController } from './controller/per-personas-inst.controller';
import { ExtInstitucionesService } from './services/ext-instituciones.service';
import { ExtTipoDocumentosService } from './services/ext-tipo-documentos.service';
import { PerPersonasInstService } from './services/per-personas-inst.service';
import { PerPersonasService } from './services/per-personas.service';

@Module({
  controllers: [
    ExtInstitucionesController,
    ExtTipoDocumentosController,
    PerPersonasController,
    PerPersonasInstController,
  ],
  providers: [
    ExtInstitucionesService,
    ExtTipoDocumentosService,
    PerPersonasInstService,
    PerPersonasService,
  ],
})
export class PersonasModule {}
