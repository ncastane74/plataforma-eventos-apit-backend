import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ExtPaisesService } from './../services/ext-paises.service';

@ApiTags('Pais')
@Controller('ext-paises')
export class ExtPaisesController {
  constructor(private extPaisesService: ExtPaisesService) {}

  @Get()
  @ApiOperation({ summary: 'Listado los paises' })
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.extPaisesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un pais por su ID' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.extPaisesService.findOne(id);
  }

  // @Post()
  // @ApiOperation({ summary: 'Crea un pais' })
  // create(@Body() payload: any) {
  //   return {
  //     message: 'Metodo de crear',
  //     payload,
  //   };
  // }

  // @Put(':id')
  // @ApiOperation({ summary: 'Actualiza un pais por su ID' })
  // update(@Param('id') id: number, @Body() payload: any) {
  //   return {
  //     id,
  //     payload,
  //   };
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Elimina un pais por ID' })
  // delete(@Param('id') id: number) {
  //   return {
  //     message: `ID elimnado ${id}`,
  //   };
  // }
}
