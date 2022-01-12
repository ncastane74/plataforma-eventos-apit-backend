import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateEventosBitacoras {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  id_evento: number;

  @IsUrl()
  @IsNotEmpty()
  url: string;

  @IsUrl()
  @IsNotEmpty()
  url_pdf: string;

  @IsInt()
  @IsNotEmpty()
  id_operario_creacion: number;

  @IsInt()
  @IsNotEmpty()
  id_operario_modificion: number;

  @IsString()
  @IsNotEmpty()
  f_creacion: Date;

  @IsString()
  @IsNotEmpty()
  f_modificacion: Date;
}

export class UpdateEventosBitacoras extends PartialType(
  CreateEventosBitacoras,
) {}
