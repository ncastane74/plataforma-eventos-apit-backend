import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreatePersonas {
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_tipo_documento: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  di: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  primer_nombre: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  segundo_nombre: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  primer_apellido: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  segundo_apellido: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  celular: string;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_operario_creacion: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_operario_modificion: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  f_creacion: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  f_modificacion: Date;
}

export class UpdatePersonas extends PartialType(CreatePersonas) {}
