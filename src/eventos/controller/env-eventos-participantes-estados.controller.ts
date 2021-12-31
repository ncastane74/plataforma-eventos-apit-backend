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

@Controller('env-eventos-participantes-estados')
export class EnvEventosParticipantesEstadosController {
  @Get()
  getEventosParticipantesEstados(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Eventos particiapantes estados limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':eventoParticipanteEstadoID')
  getEmpresaPonente(@Param('eventoParticipanteEstadoId') productId: string) {
    return {
      message: `Evento Particiapente Estado ID ${productId}`,
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
