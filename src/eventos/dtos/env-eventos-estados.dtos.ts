import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateEventosEstados {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  id_evento: number;

  @IsInt()
  @IsNotEmpty()
  estado: number;

  @IsString()
  @IsNotEmpty()
  observacion: string;

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

export class UpdateEventosEstados extends PartialType(CreateEventosEstados) {}
