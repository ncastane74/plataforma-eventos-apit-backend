import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpEmpresasPonentesController } from './controller/emp-empresas-ponentes.controller';
import { EmpEmpresasPonentesService } from './services/emp-empresas-ponentes.service';
import { EmpresasPonentes } from './entities/emp-empresas-ponentes.entity';
import { EmpEmpresasController } from './controller/emp-empresas.controller';
import { EmpEmpresasService } from './services/emp-empresas.service';
import { Empresas } from './entities/emp-empresas.entity';
import { ExtPaisesController } from './controller/ext-paises.controller';
import { ExtPaisesService } from './services/ext-paises.service';
import { Paises } from './entities/ext-paises.entity';
import { ExtDepartamentosController } from './controller/ext-departamentos.controller';
import { ExtDepartamentosService } from './services/ext-departamentos.service';
import { Departamentos } from './entities/ext-departamentos.entity';
import { ExtMunicipiosController } from './controller/ext-municipios.controller';
import { ExtMunicipiosService } from './services/ext-municipios.service';
import { Municipios } from './entities/ext-municipios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ EmpresasPonentes, Empresas, Paises, Departamentos, Municipios ])],
  controllers: [
    EmpEmpresasPonentesController,
    EmpEmpresasController,
    ExtPaisesController,
    ExtDepartamentosController,
    ExtMunicipiosController,
  ],
  providers: [
    EmpEmpresasPonentesService,
    EmpEmpresasService,
    ExtMunicipiosService,
    ExtDepartamentosService,
    ExtPaisesService,
  ],
})
export class EmpresaModule {}
