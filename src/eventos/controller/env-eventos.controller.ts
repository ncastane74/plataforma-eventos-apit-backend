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
  CreateEventos,
  UpdateEventos,
} from './../dtos/env-eventos.dtos';

import { EnvEventosService } from './../services/env-eventos.service';

@ApiTags('Eventos')
@Controller('env-eventos')
export class EnvEventosController {
  constructor(private envEventosService: EnvEventosService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los evento del partcipante' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.envEventosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista los evento del partcipante por el ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.envEventosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea el evento del participante' })
  create(@Body() payload: CreateEventos) {
    this.envEventosService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el evento participante' })
  update(@Param('id') id: number, @Body() payload: UpdateEventos) {
    return this.envEventosService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimana el evento del participante por su ID' })
  delete(@Param('id') id: number) {
    return this.envEventosService.remove(id);
  }
}
