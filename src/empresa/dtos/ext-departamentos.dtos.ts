import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateDepartamentosDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly id_pais: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nombre: string;
}

export class UpdateDepartamentoDto extends PartialType(
  CreateDepartamentosDto,
) {}
