import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateDepartamentosDto,
    UpdateDepartamentoDto,
  } from './../dtos/ext-departamentos.dtos';
  
import { Departamentos } from './../entities/ext-departamentos.entity';

@Injectable()
export class ExtDepartamentosService {}
