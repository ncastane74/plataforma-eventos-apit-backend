import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpEmpresasController } from './controller/emp-empresas.controller';
import { EmpEmpresasPonentesController } from './controller/emp-empresas-ponentes.controller';
import { ExtPaisesController } from './controller/ext-paises.controller';
import { ExtDepartamentosController } from './controller/ext-departamentos.controller';
import { ExtMunicipiosController } from './controller/ext-municipios.controller';
import { ExtTipoDocumentosController } from './controller/ext-tipo-documentos.controller';
import { PerPersonasController } from './controller/per-personas.controller';
import { SecOperariosController } from './controller/sec-operarios.controller';
import { ExtInstitucionesController } from './controller/ext-instituciones.controller';
import { PerPersonasInstController } from './controller/per-personas-inst.controller';
import { EnvEventosParticipantesEstadosController } from './controller/env-eventos-participantes-estados.controller';
import { EnvEventosParticipantesController } from './controller/env-eventos-participantes.controller';
import { EnvEventosController } from './controller/env-eventos.controller';
import { EnvEventosVitacorasController } from './controller/env-eventos-vitacoras.controller';
import { EnvEventosEstadosController } from './controller/env-eventos-estados.controller';
import { SecOperariosEstadosController } from './controller/sec-operarios-estados.controller';
import { SecOperariosPerfilesController } from './controller/sec-operarios-perfiles.controller';
import { SecPerfilesController } from './controller/sec-perfiles.controller';

@Module({
  imports: [],
  controllers: [AppController, EmpEmpresasController, EmpEmpresasPonentesController, ExtPaisesController, ExtDepartamentosController, ExtMunicipiosController, ExtTipoDocumentosController, PerPersonasController, SecOperariosController, ExtInstitucionesController, PerPersonasInstController, EnvEventosParticipantesEstadosController, EnvEventosParticipantesController, EnvEventosController, EnvEventosVitacorasController, EnvEventosEstadosController, SecOperariosEstadosController, SecOperariosPerfilesController, SecPerfilesController],
  providers: [AppService],
})
export class AppModule {}
