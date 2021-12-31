import { Module } from '@nestjs/common';

import { EmpEmpresasPonentesController } from './controller/emp-empresas-ponentes.controller';
import { EmpEmpresasController } from './controller/emp-empresas.controller';
import { ExtPaisesController } from './controller/ext-paises.controller';
import { ExtDepartamentosController } from './controller/ext-departamentos.controller';
import { ExtMunicipiosController } from './controller/ext-municipios.controller';

import { EmpEmpresasPonentesService } from './services/emp-empresas-ponentes.service';
import { EmpEmpresasService } from './services/emp-empresas.service';
import { ExtMunicipiosService } from './services/ext-municipios.service';
import { ExtDepartamentosService } from './services/ext-departamentos.service';
import { ExtPaisesService } from './services/ext-paises.service';

@Module({
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
