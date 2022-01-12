import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateEmpresasDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nit: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly razon_social: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_municipio: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly direccion: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly telefono: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly estado: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_operario_creacion: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_operario_modificacion: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly f_creacion: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly f_modificacion: Date;
}

export class UpdateEmpresasDto extends PartialType(CreateEmpresasDto) {}
