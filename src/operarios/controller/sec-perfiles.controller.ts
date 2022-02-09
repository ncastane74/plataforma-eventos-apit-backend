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
  CreatePerfiles,
  UpdatePerfiles,
} from './../dtos/sec-perfiles.dtos';

import { SecPerfilesService } from './../services/sec-perfiles.service';

@ApiTags('Perfiles')
@Controller('sec-perfiles')
export class SecPerfilesController {

  constructor(private secPerfilesService: SecPerfilesService) {}
  @Get()
  getPerfiles(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.secPerfilesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca el operario por id' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.secPerfilesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea el operario' })
  create(@Body() payload:   CreatePerfiles  ) {
    this.secPerfilesService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza el  operario' })
  update(@Param('id') id: number, @Body() payload: UpdatePerfiles) {
    return this.secPerfilesService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina el perfil operario' })
  delete(@Param('id') id: number) {
    return this.secPerfilesService.remove(id);
  }
}
