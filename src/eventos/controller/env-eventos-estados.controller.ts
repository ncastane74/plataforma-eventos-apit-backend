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

@Controller('env-eventos-estados')
export class EnvEventosEstadosController {
  @Get()
  getEventosEstados(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Eventos Estados limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':eventoEstadoId')
  getEmpresaPonente(@Param('eventoEstadoId') productId: string) {
    return {
      message: `Evento Estado ${productId}`,
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
