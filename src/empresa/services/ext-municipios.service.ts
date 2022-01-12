import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateMunicipiosDto,
    UpdateMunicipiosDto,
  } from './../dtos/ext-municipios.dtos';

import { Municipios } from './../entities/ext-municipios.entity';

@Injectable()
export class ExtMunicipiosService {}
