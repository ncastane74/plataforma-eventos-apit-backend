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
  CreateOperarios,
  UpdateOperarios,
} from './../dtos/sec-operarios.dtos';

import { SecOperariosService } from './../services/sec-operarios.service';

@ApiTags('Operarios')
@Controller('sec-operarios')
export class SecOperariosController {

  constructor(private secOperariosService: SecOperariosService) {}
  @Get()
  getOperarios(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.secOperariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca el operario por id' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.secOperariosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea el operario' })
  create(@Body() payload:   CreateOperarios  ) {
    this.secOperariosService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el  operario' })
  update(@Param('id') id: number, @Body() payload: UpdateOperarios) {
    return this.secOperariosService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina el perfil operario' })
  delete(@Param('id') id: number) {
    return this.secOperariosService.remove(id);
  }
}
