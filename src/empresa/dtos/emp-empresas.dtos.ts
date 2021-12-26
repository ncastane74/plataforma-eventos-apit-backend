import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'

export class CreateEmpresasDto {
    
    @IsInt()
    @IsNotEmpty()
    readonly id: number;

    @IsString()
    @IsNotEmpty()
    readonly nit: string;

    @IsString()
    @IsNotEmpty()
    readonly razon_social: string;

    @IsInt()
    @IsNotEmpty()
    readonly id_municipio: number;

    @IsString()
    @IsNotEmpty()
    readonly direccion: string;

    @IsString()
    @IsNotEmpty()
    readonly telefono: string;

    @IsInt()
    @IsNotEmpty()
    readonly estado: number;

    @IsInt()
    @IsNotEmpty()
    readonly id_operario_creacion: number;

    @IsInt()
    @IsNotEmpty()
    readonly id_operario_modificacion: number;

    @IsString()
    @IsNotEmpty()
    readonly f_creacion: string;

    @IsString()
    @IsNotEmpty()
    readonly f_modificacion: string;
}

export class UpdateEmpresasDto extends PartialType(CreateEmpresasDto) {}