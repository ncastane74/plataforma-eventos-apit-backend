import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ExtMunicipiosService } from './../services/ext-municipios.service';

@ApiTags('Municipio')
@Controller('ext-municipios')
export class ExtMunicipiosController {
  constructor(private extMunicipiosService: ExtMunicipiosService) {}

  @Get()
  @ApiOperation({ summary: 'Listado los municipios' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.extMunicipiosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un minicipio por si ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.extMunicipiosService.findOne(id);
  }

  // @Post()
  // @ApiOperation({ summary: 'Crea municipio' })
  // create(@Body() payload: any) {
  //   return {
  //     message: 'Metodo de crear',
  //     payload,
  //   };
  // }

  // @Put(':id')
  // @ApiOperation({ summary: 'Actualiza un municipio por su ID' })
  // update(@Param('id') id: number, @Body() payload: any) {
  //   return {
  //     id,
  //     payload,
  //   };
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Elimina un municipio por su ID' })
  // delete(@Param('id') id: number) {
  //   return {
  //     message: `ID elimnado ${id}`,
  //   };
  // }
}
