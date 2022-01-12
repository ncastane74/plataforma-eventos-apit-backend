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

@ApiTags('Municipio')
@Controller('ext-municipios')
export class ExtMunicipiosController {

  @Get()
  @ApiOperation({ summary: 'Listado los municipios' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Municipios limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':municipioId')
  @ApiOperation({ summary: 'Buscar un minicipio por si ID' })
  getMunicipio(@Param('municipioId') productId: string) {
    return {
      message: `Municipio ${productId}`,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Crea municipio' })
  create(@Body() payload: any) {
    return {
      message: 'Metodo de crear',
      payload,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza un municipio por su ID' })
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un municipio por su ID' })
  delete(@Param('id') id: number) {
    return {
      message: `ID elimnado ${id}`,
    };
  }
}
