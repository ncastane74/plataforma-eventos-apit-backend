import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('per-personas')
export class PerPersonasController {

    @Get()
    getPersonas(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ){
        return {
            message: `Personas limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        }
    }

    @Get(':personaId')
    getPersonaInt(@Param('personaId') productId: string) {
      return {
          message: `Persona ID ${productId}`
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
