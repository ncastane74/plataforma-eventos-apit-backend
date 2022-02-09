import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOperariosPerfiles {
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_operario: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_perfil: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  estado: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  observacion: string;

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

export class UpdateOperariosPerfiles extends PartialType(
  CreateOperariosPerfiles,
) {}
