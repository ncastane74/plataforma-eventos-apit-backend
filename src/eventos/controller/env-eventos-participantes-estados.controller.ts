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
  CreateEventosParticipantesEstados,
  UpdateEventosParticipantesEstados,
} from './../dtos/env-eventos-participantes-estados.dtos';

import { EnvEventosParticipantesEstadosService } from './../services/env-eventos-participantes-estados.service';

@ApiTags('Eventos Paticipantes Estados')
@Controller('env-eventos-participantes-estados')
export class EnvEventosParticipantesEstadosController {
  constructor(private envEventosParticipantesEstadosService: EnvEventosParticipantesEstadosService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los estados del evento del partcipante' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.envEventosParticipantesEstadosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista el estados del evento del partcipante por el ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.envEventosParticipantesEstadosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea el estado evento del participante ' })
  create(@Body() payload: CreateEventosParticipantesEstados) {
    this.envEventosParticipantesEstadosService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el estado del evento participante' })
  update(@Param('id') id: number, @Body() payload: UpdateEventosParticipantesEstados) {
    return this.envEventosParticipantesEstadosService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimana el estado del evento por su ID' })
  delete(@Param('id') id: number) {
    return this.envEventosParticipantesEstadosService.remove(id);
  }
}
