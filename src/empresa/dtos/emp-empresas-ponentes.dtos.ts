import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateEmpresasPonentesDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_persona: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_empresa: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly descripcion: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_operario_creacion: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_operario_modificion: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly f_creacion: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly f_modificacion: Date;
}

export class UpdateEmpresasPonentesDto extends PartialType(
  CreateEmpresasPonentesDto,
) {}
