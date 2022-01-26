import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ExtDepartamentosService } from './../services/ext-departamentos.service';

@ApiTags('Departamento')
@Controller('ext-departamentos')
export class ExtDepartamentosController {
  constructor(private extDepartamentosService: ExtDepartamentosService) {}

  @Get()
  @ApiOperation({ summary: 'Listado de departamentos' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.extDepartamentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca departamento por su ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.extDepartamentosService.findOne(id);
  }

  // @Post()
  // @ApiOperation({ summary: 'Crea departamento' })
  // create(@Body() payload: CreateDepartamentosDto) {
  //   this.extDepartamentosService.create(payload);
  // }

  // @Put(':id')
  // @ApiOperation({ summary: 'Actualiza departamento por su ID' })
  // update(@Param('id') id: number, @Body() payload: UpdateDepartamentoDto) {
  //   return this.extDepartamentosService.update(id, payload);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Elimna departamento por su ID' })
  // delete(@Param('id') id: number) {
  //   return this.extDepartamentosService.remove(id);
  // }
}
