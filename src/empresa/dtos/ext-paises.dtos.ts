import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreatePaisesDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nombre: string;
}

export class UpdatePaisesDto extends PartialType(CreatePaisesDto) {}
