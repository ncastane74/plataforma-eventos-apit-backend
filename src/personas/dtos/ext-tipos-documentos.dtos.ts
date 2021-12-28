import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'

export class CreateTiposDocumentos {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;
}

export class UpdateTiposDocumentos extends PartialType(CreateTiposDocumentos) {}