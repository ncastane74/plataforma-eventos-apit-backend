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
  CreateOperariosEstados,
  UpdateOperariosEstados,
} from './../dtos/sec-operarios-estados.dtos';

import { SecOperariosEstadosService } from './../services/sec-operarios-estados.service';

@ApiTags('Operario Estados')
@Controller('sec-operarios-estados')
export class SecOperariosEstadosController {

  constructor(private secOperariosEstadosService: SecOperariosEstadosService) {}
  @Get()
  getOperariosEstados(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.secOperariosEstadosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca el estado por el ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.secOperariosEstadosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea estado operario' })
  create(@Body() payload: CreateOperariosEstados) {
    this.secOperariosEstadosService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza estado del operario' })
  update(@Param('id') id: number, @Body() payload: UpdateOperariosEstados) {
    return this.secOperariosEstadosService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina estado del operario' })
  delete(@Param('id') id: number) {
    return this.secOperariosEstadosService.remove(id);
  }
}
