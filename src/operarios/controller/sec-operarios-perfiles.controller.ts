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

@Controller('sec-operarios-perfiles')
export class SecOperariosPerfilesController {
  @Get()
  getOperariosPerfiles(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Operarios Perfiles limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':operarioPerfilId')
  getOperarioPerfil(@Param('operarioPerfilId') productId: string) {
    return {
      message: `Operario Perfil ID ${productId}`,
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
