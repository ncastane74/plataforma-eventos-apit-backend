import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('ext-departamentos')
export class ExtDepartamentosController {

    @Get()
    getDepartamentos(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ){
        return {
            message: `Departamentos limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        }
    }

    @Get(':departamentoId')
    getOne(@Param('departamentoId') productId: string) {
      return {
          message: `Departamento ${productId}`
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
