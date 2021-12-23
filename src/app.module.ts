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
import { EmpEmpresasPonentesService } from './services/emp-empresas-ponentes.service';
import { EmpEmpresasService } from './services/emp-empresas.service';
import { EnvEventosEstadosService } from './services/env-eventos-estados.service';
import { EnvEventosParticipantesEstadosService } from './services/env-eventos-participantes-estados.service';
import { EnvEventosParticipantesService } from './services/env-eventos-participantes.service';
import { EnvEventosService } from './services/env-eventos.service';
import { ExtDepartamentosService } from './services/ext-departamentos.service';
import { ExtInstitucionesService } from './services/ext-instituciones.service';
import { ExtMunicipiosService } from './services/ext-municipios.service';
import { ExtPaisesService } from './services/ext-paises.service';
import { ExtTipoDocumentosService } from './services/ext-tipo-documentos.service';
import { PerPersonasInstService } from './services/per-personas-inst.service';
import { PerPersonasService } from './services/per-personas.service';
import { SecOperariosEstadosService } from './services/sec-operarios-estados.service';
import { SecOperariosPerfilesService } from './services/sec-operarios-perfiles.service';
import { SecOperariosService } from './services/sec-operarios.service';
import { SecPerfilesService } from './services/sec-perfiles.service';
import { EnvEventosVitacorasService } from './services/env-eventos-vitacoras.service';

@Module({
  imports: [],
  controllers: [AppController, EmpEmpresasController, EmpEmpresasPonentesController, ExtPaisesController, ExtDepartamentosController, ExtMunicipiosController, ExtTipoDocumentosController, PerPersonasController, SecOperariosController, ExtInstitucionesController, PerPersonasInstController, EnvEventosParticipantesEstadosController, EnvEventosParticipantesController, EnvEventosController, EnvEventosVitacorasController, EnvEventosEstadosController, SecOperariosEstadosController, SecOperariosPerfilesController, SecPerfilesController],
  providers: [AppService, EmpEmpresasPonentesService, EmpEmpresasService, EnvEventosEstadosService, EnvEventosParticipantesEstadosService, EnvEventosParticipantesService, EnvEventosService, ExtDepartamentosService, ExtInstitucionesService, ExtMunicipiosService, ExtPaisesService, ExtTipoDocumentosService, PerPersonasInstService, PerPersonasService, SecOperariosEstadosService, SecOperariosPerfilesService, SecOperariosService, SecPerfilesService, EnvEventosVitacorasService],
})
export class AppModule {}
