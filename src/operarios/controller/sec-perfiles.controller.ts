import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('sec-perfiles')
export class SecPerfilesController {

    @Get()
    getPerfiles(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ){
        return {
            message: `Perfiles limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        }
    }

    @Get(':operacioId')
    getPerfil(@Param('operacioId') productId: string) {
      return {
          message: `Perfil ID ${productId}`
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
