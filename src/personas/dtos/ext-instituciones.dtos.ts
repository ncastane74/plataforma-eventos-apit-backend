import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateInstituciones {
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nombre: string;
}

export class UpdateInstituciones extends PartialType(
  CreateInstituciones,) {}
