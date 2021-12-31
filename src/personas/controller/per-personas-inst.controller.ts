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

@Controller('per-personas-inst')
export class PerPersonasInstController {
  @Get()
  getPersonasInt(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Personas Inst limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get(':personaIntId')
  getPersonaInt(@Param('personaIntId') productId: string) {
    return {
      message: `Persona Int ID ${productId}`,
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
