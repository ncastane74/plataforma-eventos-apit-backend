import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'

export class CreateMunicipiosDto {
    
    @IsInt()
    @IsNotEmpty()
    readonly id: number;

    @IsInt()
    @IsNotEmpty()
    readonly id_departamento: number;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

}

export class UpdateMunicipiosDto extends PartialType(CreateMunicipiosDto) {}