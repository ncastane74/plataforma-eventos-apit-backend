import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateInstituciones {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;
}

export class UpdateInstituciones extends PartialType(CreateInstituciones) {}