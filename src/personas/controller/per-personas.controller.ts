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
  CreatePersonas,
  UpdatePersonas,
} from './../dtos/per-personas.dtos';

import { PerPersonasService } from './../services/per-personas.service';

@ApiTags('Personas')
@Controller('per-personas')
export class PerPersonasController {

  constructor(private perPersonasService: PerPersonasService) {}
  @Get()
  getPersonas(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.perPersonasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca la persona por el ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.perPersonasService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea persona' })
  create(@Body() payload: CreatePersonas) {
    this.perPersonasService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza persona' })
  update(@Param('id') id: number, @Body() payload: UpdatePersonas) {
    return this.perPersonasService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina persona' })
  delete(@Param('id') id: number) {
    return this.perPersonasService.remove(id);
  }
}
