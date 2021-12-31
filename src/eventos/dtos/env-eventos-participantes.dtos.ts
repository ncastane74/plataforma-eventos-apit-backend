import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateEventosParticipantes {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  id_persona: number;

  @IsInt()
  @IsNotEmpty()
  id_evento: number;

  @IsInt()
  @IsNotEmpty()
  id_operario_creacion: number;

  @IsInt()
  @IsNotEmpty()
  id_operario_modificion: number;

  @IsString()
  @IsNotEmpty()
  f_creacion: string;

  @IsString()
  @IsNotEmpty()
  f_modificacion: string;
}

export class UpdateEventosParticipantes extends PartialType(
  CreateEventosParticipantes,
) {}
