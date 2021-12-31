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
  @ApiOperation({ summary: 'Lista los productos' })
  getEmpresaPonentes(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.empEmpresasPonentesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.empEmpresasPonentesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateEmpresasPonentesDto) {
    this.empEmpresasPonentesService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateEmpresasPonentesDto) {
    return this.empEmpresasPonentesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.empEmpresasPonentesService.remove(id);
  }
}
