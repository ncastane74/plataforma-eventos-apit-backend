import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import {
  CreateOperariosPerfiles,
  UpdateOperariosPerfiles,
} from './../dtos/sec-operarios-perfiles.dtos';

import { SecOperariosPerfilesService } from './../services/sec-operarios-perfiles.service';

@ApiTags('Operario Perfiles')
@Controller('sec-operarios-perfiles')
export class SecOperariosPerfilesController {

  constructor(private secOperariosPerfilesService: SecOperariosPerfilesService) {}
  @Get()
  getOperariosPerfiles(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.secOperariosPerfilesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca el perfil por el id' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.secOperariosPerfilesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea el perfil del operario' })
  create(@Body() payload:   CreateOperariosPerfiles  ) {
    this.secOperariosPerfilesService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el perfil operario' })
  update(@Param('id') id: number, @Body() payload: UpdateOperariosPerfiles) {
    return this.secOperariosPerfilesService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina el perfil operario' })
  delete(@Param('id') id: number) {
    return this.secOperariosPerfilesService.remove(id);
  }
 
}
