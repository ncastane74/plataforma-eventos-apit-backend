import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateMunicipiosDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_departamento: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nombre: string;
}

export class UpdateMunicipiosDto extends PartialType(CreateMunicipiosDto) {}
