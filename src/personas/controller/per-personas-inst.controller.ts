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
  CreatePersonasInst,
  UpdatePersonasInst,
} from './../dtos/per-personas-inst.dtos';

import { PerPersonasInstService } from './../services/per-personas-inst.service'

@ApiTags('Persona institucion')
@Controller('per-personas-inst')
export class PerPersonasInstController {

   constructor(private perPersonasInstService: PerPersonasInstService) {}
  @Get()
  getPersonasInt(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.perPersonasInstService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca la persona institución por el ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.perPersonasInstService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea persona institución' })
  create(@Body() payload: CreatePersonasInst) {
    this.perPersonasInstService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza persona institución' })
  update(@Param('id') id: number, @Body() payload: UpdatePersonasInst) {
    return this.perPersonasInstService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina persona institución' })
  delete(@Param('id') id: number) {
    return this.perPersonasInstService.remove(id);
  }
}
