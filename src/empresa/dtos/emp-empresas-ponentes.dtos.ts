import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateEmpresasPonentesDto {
  @IsInt()
  @IsNotEmpty()
  readonly id: number;

  @IsInt()
  @IsNotEmpty()
  readonly id_persona: number;

  @IsInt()
  @IsNotEmpty()
  readonly id_empresa: number;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsInt()
  @IsNotEmpty()
  readonly id_operario_creacion: number;

  @IsInt()
  @IsNotEmpty()
  readonly id_operario_modificion: number;

  @IsString()
  @IsNotEmpty()
  readonly f_creacion: string;

  @IsString()
  @IsNotEmpty()
  readonly f_modificacion: string;
}

export class UpdateEmpresasPonentesDto extends PartialType(
  CreateEmpresasPonentesDto,
) {}
