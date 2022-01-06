import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpEmpresasPonentesController } from './controller/emp-empresas-ponentes.controller';
import { EmpEmpresasPonentesService } from './services/emp-empresas-ponentes.service';
import { EmpresasPonentes } from './entities/emp-empresas-ponentes.entity';
import { EmpEmpresasController } from './controller/emp-empresas.controller';
import { EmpEmpresasService } from './services/emp-empresas.service';
import { ExtPaisesController } from './controller/ext-paises.controller';
import { ExtPaisesService } from './services/ext-paises.service';
import { ExtDepartamentosController } from './controller/ext-departamentos.controller';
import { ExtDepartamentosService } from './services/ext-departamentos.service';
import { ExtMunicipiosController } from './controller/ext-municipios.controller';
import { ExtMunicipiosService } from './services/ext-municipios.service';

@Module({
  imports: [TypeOrmModule.forFeature([ EmpresasPonentes ])],
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
