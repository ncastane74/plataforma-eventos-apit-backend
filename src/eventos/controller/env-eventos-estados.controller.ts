import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import {
  CreateEventosEstados,
  UpdateEventosEstados,
} from './../dtos/env-eventos-estados.dtos';

import { EnvEventosEstadosService } from './../services/env-eventos-estados.service';

@ApiTags('Eventos Estados')
@Controller('env-eventos-estados')
export class EnvEventosEstadosController {
  constructor(private envEventosEstadosService: EnvEventosEstadosService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los estados del evento' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.envEventosEstadosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista el estado del evento por el ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.envEventosEstadosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea estado del evento' })
  create(@Body() payload: CreateEventosEstados) {
    this.envEventosEstadosService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el estado del evento' })
  update(@Param('id') id: number, @Body() payload: UpdateEventosEstados) {
    return this.envEventosEstadosService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimana el estado del evento por su ID' })
  delete(@Param('id') id: number) {
    return this.envEventosEstadosService.remove(id);
  }
}
