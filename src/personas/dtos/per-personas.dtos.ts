import { IsEmail, IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'

export class CreatePersonas {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsInt()
    @IsNotEmpty()
    id_tipo_documento: number;

    @IsString()
    @IsNotEmpty()
    di: string;

    @IsString()
    @IsNotEmpty()
    primer_nombre: string;

    @IsString()
    @IsNotEmpty()
    segundo_nombre: string;

    @IsString()
    @IsNotEmpty()
    primer_apellido: string;

    @IsString()
    @IsNotEmpty()
    segundo_apellido: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    celular: string;

    @IsInt()
    @IsNotEmpty()
    id_operario_creacion: number;

    @IsInt()
    @IsNotEmpty()
    id_operario_modificion: number;

    @IsString()
    @IsNotEmpty()
    f_creacion: string;

    @IsString()
    @IsNotEmpty()
    f_modificacion: string;
}