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

@ApiTags('Pais')
@Controller('ext-paises')
export class ExtPaisesController {

  @Get()
  @ApiOperation({ summary: 'Listado los paises' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Paises limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':paisId')
  @ApiOperation({ summary: 'Buscar un pais por su ID' })
  getMunicipio(@Param('paisId') productId: string) {
    return {
      message: `Paise ${productId}`,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Crea un pais' })
  create(@Body() payload: any) {
    return {
      message: 'Metodo de crear',
      payload,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza un pais por su ID' })
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un pais por ID' })
  delete(@Param('id') id: number) {
    return {
      message: `ID elimnado ${id}`,
    };
  }
}
