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

@Controller('ext-tipo-documentos')
export class ExtTipoDocumentosController {
  @Get()
  getTiposDocumentos(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Tipos de Documentos limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':tipoDocumentoId')
  getTipoDocumento(@Param('tipoDocumentoId') productId: string) {
    return {
      message: `Tipo Documentos ID ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Metodo de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `ID elimnado ${id}`,
    };
  }
}
