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
  CreateEmpresasPonentesDto,
  UpdateEmpresasPonentesDto,
} from './../dtos/emp-empresas-ponentes.dtos';

import { EmpEmpresasPonentesService } from './../services/emp-empresas-ponentes.service';

@ApiTags('Empresas Ponentes')
@Controller('emp-empresas-ponentes')
export class EmpEmpresasPonentesController {
  constructor(private empEmpresasPonentesService: EmpEmpresasPonentesService) {}

  @Get()
  @ApiOperation({ summary: 'Listado de empresas ponentes' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.empEmpresasPonentesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca la empresa ponente por el ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.empEmpresasPonentesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea empresas ponente' })
  create(@Body() payload: CreateEmpresasPonentesDto) {
    this.empEmpresasPonentesService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza la empresa ponentes' })
  update(@Param('id') id: number, @Body() payload: UpdateEmpresasPonentesDto) {
    return this.empEmpresasPonentesService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimana la empresa ponente por su ID' })
  delete(@Param('id') id: number) {
    return this.empEmpresasPonentesService.remove(id);
  }
}
