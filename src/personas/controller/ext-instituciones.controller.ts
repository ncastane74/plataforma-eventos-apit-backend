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
  CreateInstituciones,
  UpdateInstituciones,
} from './../dtos/ext-instituciones.dtos';

import { ExtInstitucionesService } from './../services/ext-instituciones.service';

@ApiTags('Instituciones')
@Controller('ext-instituciones')
export class ExtInstitucionesController {

  constructor(private extInstitucionesService: ExtInstitucionesService) {}
  @Get()
  getInstituciones(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.extInstitucionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca la institucion por el ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.extInstitucionesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea institucion' })
  create(@Body() payload: CreateInstituciones) {
    this.extInstitucionesService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza insitucion' })
  update(@Param('id') id: number, @Body() payload: UpdateInstituciones) {
    return this.extInstitucionesService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina institucion' })
  delete(@Param('id') id: number) {
    return this.extInstitucionesService.remove(id);
  }
}
