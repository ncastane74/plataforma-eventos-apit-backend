import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('env-eventos-bitacoras')
export class EnvEventosBitacorasController {

    @Get()
    getEventosBitacoras(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ){
        return {
            message: `Eventos Bitacora limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        }
    }

    @Get(':eventoBitacoraId')
    getEmpresaPonente(@Param('eventoBitacoraId') productId: string) {
      return {
        message: `Evento Bitacora ID ${productId}`
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
