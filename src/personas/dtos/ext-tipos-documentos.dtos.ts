import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateTiposDocumentos {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;
}

export class UpdateTiposDocumentos extends PartialType(CreateTiposDocumentos) {}