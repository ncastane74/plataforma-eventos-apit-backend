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
  CreateEmpresasDto,
  UpdateEmpresasDto,
} from './../dtos/emp-empresas.dtos';

import { EmpEmpresasService } from './../services/emp-empresas.service';

@ApiTags('Empresas')
@Controller('emp-empresas')
export class EmpEmpresasController {
  constructor(private empEmpresasService: EmpEmpresasService) {}

  @Get()
  @ApiOperation({ summary: 'Listado de las empresas' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.empEmpresasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca la empresa por el ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.empEmpresasService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea una empresa ' })
  create(@Body() payload: CreateEmpresasDto) {
    this.empEmpresasService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actuliza la Empresa' })
  update(@Param('id') id: number, @Body() payload: UpdateEmpresasDto) {
    return this.empEmpresasService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina una empresa por su ID' })
  delete(@Param('id') id: number) {
    return this.empEmpresasService.remove(id);
  }
}
