import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateDepartamentosDto {
    
    @IsInt()
    @IsNotEmpty()
    readonly id: number;

    @IsInt()
    @IsNotEmpty()
    readonly id_pais: number;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

}

export class UpdateDepartamentoDto extends PartialType(CreateDepartamentosDto) {}