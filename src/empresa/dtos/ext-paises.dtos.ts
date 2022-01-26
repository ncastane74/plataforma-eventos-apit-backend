import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreatePaisesDto {
  
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nombre: string;
}

export class UpdatePaisesDto extends PartialType(CreatePaisesDto) {}
