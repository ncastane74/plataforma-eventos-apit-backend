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
  CreateEventosParticipantes,
  UpdateEventosParticipantes,
} from './../dtos/env-eventos-participantes.dtos';

import { EnvEventosParticipantesService } from './../services/env-eventos-participantes.service';

@ApiTags('Eventos Participantes')
@Controller('env-eventos-participantes')
export class EnvEventosParticipantesController {
  constructor(private envEventosParticipantesService: EnvEventosParticipantesService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los evento del partcipante' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.envEventosParticipantesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista los evento del partcipante por el ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.envEventosParticipantesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea el evento del participante' })
  create(@Body() payload: CreateEventosParticipantes) {
    this.envEventosParticipantesService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el evento participante' })
  update(@Param('id') id: number, @Body() payload: UpdateEventosParticipantes) {
    return this.envEventosParticipantesService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimana el evento del participante por su ID' })
  delete(@Param('id') id: number) {
    return this.envEventosParticipantesService.remove(id);
  }
}
