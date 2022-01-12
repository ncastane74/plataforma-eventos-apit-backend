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
  CreateEventosBitacoras,
  UpdateEventosBitacoras,
} from './../dtos/env-eventos-bitacoras.dtos';

import { EnvEventosBitacorasService } from './../services/env-eventos-bitacoras.service';

@ApiTags('Eventos Bitacora')
@Controller('env-eventos-bitacoras')
export class EnvEventosBitacorasController {
  constructor(private envEventosBitacorasService: EnvEventosBitacorasService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos los registros de los eventos de la bitacora' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.envEventosBitacorasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca el evento de la bitacora por el ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.envEventosBitacorasService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea evento en bitacora' })
  create(@Body() payload: CreateEventosBitacoras) {
    this.envEventosBitacorasService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el evento bitacora' })
  update(@Param('id') id: number, @Body() payload: UpdateEventosBitacoras) {
    return this.envEventosBitacorasService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimana evento de la bitacora por su ID' })
  delete(@Param('id') id: number) {
    return this.envEventosBitacorasService.remove(id);
  }
}
