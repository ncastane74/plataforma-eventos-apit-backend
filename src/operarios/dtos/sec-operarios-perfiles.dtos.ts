import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateOperariosPerfiles {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsInt()
    @IsNotEmpty()
    id_operario: number;

    @IsInt()
    @IsNotEmpty()
    id_perfil: number;

    @IsInt()
    @IsNotEmpty()
    estado: number;

    @IsString()
    @IsNotEmpty()
    observacion: string;

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

export class UpdateOperariosPerfiles extends PartialType(CreateOperariosPerfiles) {}