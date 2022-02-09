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
  CreateTiposDocumentos,
  UpdateTiposDocumentos,
} from './../dtos/ext-tipos-documentos.dtos';

import { ExtTipoDocumentosService } from './../services/ext-tipo-documentos.service';

@ApiTags('Tipo documento')

@Controller('ext-tipo-documentos')
export class ExtTipoDocumentosController {

  constructor(private extTipoDocumentosService: ExtTipoDocumentosService) {}
  @Get()
  getTiposDocumentos(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.extTipoDocumentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca tipo documento por el ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.extTipoDocumentosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea tipo documento' })
  create(@Body() payload: CreateTiposDocumentos) {
    this.extTipoDocumentosService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualiza tipo documento' })
  update(@Param('id') id: number, @Body() payload: UpdateTiposDocumentos) {
    return this.extTipoDocumentosService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina tipo documento' })
  delete(@Param('id') id: number) {
    return this.extTipoDocumentosService.remove(id);
  }
}
