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
import { CreateEmpresasPonentesDto } from '../dtos/emp-empresas-ponentes.dtos';

import {
  CreateEmpresasDto,
  UpdateEmpresasDto,
} from './../dtos/emp-empresas.dtos';

import { EmpEmpresasService } from './../services/emp-empresas.service';

@Controller('emp-empresas')
export class EmpEmpresasController {
  constructor(private empEmpresasService: EmpEmpresasService) {}

  @Get()
  getEmpresas(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.empEmpresasService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.empEmpresasService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateEmpresasDto) {
    this.empEmpresasService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateEmpresasDto) {
    return this.empEmpresasService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.empEmpresasService.remove(id);
  }
}
