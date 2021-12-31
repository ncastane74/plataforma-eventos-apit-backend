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

@Controller('sec-operarios-estados')
export class SecOperariosEstadosController {
  @Get()
  getOperariosEstados(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Operarios Estados limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':operacioEstadoId')
  getOperarioEstado(@Param('operacioEstadoId') productId: string) {
    return {
      message: `Operario Estado ID ${productId}`,
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
