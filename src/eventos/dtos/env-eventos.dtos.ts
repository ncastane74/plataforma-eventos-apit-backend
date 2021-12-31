import { IsDate, IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateEventos {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsInt()
    @IsNotEmpty()
    id_empresa_ponente: number;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsDate()
    @IsNotEmpty()
    fecha: Date;

    @IsDate()
    @IsNotEmpty()
    h_inicio: Date;

    @IsDate()
    @IsNotEmpty()
    h_fin: Date;

    @IsInt()
    @IsNotEmpty()
    tipo_evento: number;

    @IsString()
    @IsNotEmpty()
    lugar: string;

    @IsUrl()
    @IsNotEmpty()
    url: string;

    @IsString()
    @IsNotEmpty()
    contacto: string;

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

export class UpdateEventos extends PartialType(CreateEventos) {}