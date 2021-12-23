import { Module } from '@nestjs/common';

import { SecOperariosEstadosController } from './controller/sec-operarios-estados.controller';
import { SecOperariosPerfilesController } from './controller/sec-operarios-perfiles.controller';
import { SecOperariosController } from './controller/sec-operarios.controller';
import { SecPerfilesController } from './controller/sec-perfiles.controller';

import { SecOperariosEstadosService } from './services/sec-operarios-estados.service';
import { SecOperariosPerfilesService } from './services/sec-operarios-perfiles.service';
import { SecOperariosService } from './services/sec-operarios.service';
import { SecPerfilesService } from './services/sec-perfiles.service';

@Module({
    controllers: [ SecOperariosEstadosController, SecOperariosPerfilesController, SecOperariosController, SecPerfilesController ],
    providers: [ SecOperariosEstadosService, SecOperariosPerfilesService, SecOperariosService, SecPerfilesService ],
})
export class OperariosModule {}
