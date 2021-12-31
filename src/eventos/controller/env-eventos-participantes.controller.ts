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

@Controller('env-eventos-participantes')
export class EnvEventosParticipantesController {
  @Get()
  getEventosParticipantes(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Eventos particiapantes limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':eventosParticipanteId')
  getEmpresaPonente(@Param('eventosParticipanteId') productId: string) {
    return {
      message: `Evento Participante ID ${productId}`,
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
