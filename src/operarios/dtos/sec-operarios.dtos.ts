import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOperarios {
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id_persona: number;

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

export class UpdateOperarios extends PartialType(
  CreateOperarios,
) {}
