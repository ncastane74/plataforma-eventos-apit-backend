import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreatePaisesDto,
    UpdatePaisesDto,
  } from './../dtos/ext-paises.dtos';

import { Paises } from './../entities/ext-paises.entity';

@Injectable()
export class ExtPaisesService {}
