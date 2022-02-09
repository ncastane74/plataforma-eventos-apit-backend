import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreatePersonasInst {

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
  id_instucion: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nombre_inst_otro: string;

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

export class UpdatePersonasInst extends PartialType(CreatePersonasInst) {}
