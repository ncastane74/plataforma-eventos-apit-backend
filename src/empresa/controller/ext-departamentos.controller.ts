import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Departamento')
@Controller('ext-departamentos')
export class ExtDepartamentosController {

  @Get()
  @ApiOperation({ summary: 'Listado de departamentos' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Departamentos limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':departamentoId')
  @ApiOperation({ summary: 'Busca departamento por su ID' })
  getOne(@Param('departamentoId') productId: string) {
    return {
      message: `Departamento ${productId}`,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Crea departamento' })
  create(@Body() payload: any) {
    return {
      message: 'Metodo de crear',
      payload,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza departamento por su ID' })
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimna departamento por su ID' })
  delete(@Param('id') id: number) {
    return {
      message: `ID elimnado ${id}`,
    };
  }
}
