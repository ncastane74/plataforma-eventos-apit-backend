import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('env-eventos')
export class EnvEventosController {

    @Get()
    getEventos(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ){
        return {
            message: `Eventos limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        }
    }

    @Get(':eventoId')
    getEmpresaPonente(@Param('eventoBitacoraId') productId: string) {
      return {
        message: `Evento ID ${productId}`
      }
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
          message: `ID elimnado ${id}`
      }
    }
}
