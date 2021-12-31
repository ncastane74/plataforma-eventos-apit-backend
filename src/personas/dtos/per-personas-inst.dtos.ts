import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreatePersonasInst {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsInt()
  @IsNotEmpty()
  id_persona: number;

  @IsInt()
  @IsNotEmpty()
  id_instucion: number;

  @IsString()
  @IsNotEmpty()
  nombre_inst_otro: string;

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

export class UpdatePersonasInst extends PartialType(CreatePersonasInst) {}
