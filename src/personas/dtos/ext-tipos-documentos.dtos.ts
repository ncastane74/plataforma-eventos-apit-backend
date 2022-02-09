import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateTiposDocumentos {
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

export class UpdateTiposDocumentos extends PartialType(CreateTiposDocumentos) {}
