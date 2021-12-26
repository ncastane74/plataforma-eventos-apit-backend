import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('ext-paises')
export class ExtPaisesController {

    @Get()
    getPaises(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ){
        return {
            message: `Paises limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        }
    }

    @Get(':paisId')
    getMunicipio(@Param('paisId') productId: string) {
      return {
          message: `Paise ${productId}`
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
