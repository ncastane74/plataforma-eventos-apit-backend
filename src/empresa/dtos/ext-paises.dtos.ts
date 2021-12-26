import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'

export class CreatePaisesDto {
    
    @IsInt()
    @IsNotEmpty()
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

}

export class UpdatePaisesDto extends PartialType(CreatePaisesDto) {}