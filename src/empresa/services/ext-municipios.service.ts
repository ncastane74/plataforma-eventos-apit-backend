import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateMunicipiosDto,
    UpdateMunicipiosDto,
  } from './../dtos/ext-municipios.dtos';

import { Municipios } from './../entities/ext-municipios.entity';

@Injectable()
export class ExtMunicipiosService {
    constructor(@InjectRepository(Municipios) private municipiosRepository: Repository<Municipios>){}

  findAll() {
    return this.municipiosRepository.find();
  }

  async findOne(id: number) {
    const municipioPon = await this.municipiosRepository.findOne(id);
    if (!municipioPon) {
      throw new NotFoundException(`Municipio #${id} not found`);
    }
    return municipioPon;
  }

//   create(data: CreateMunicipiosDto) {
//     const newMunicipio = this.municipiosRepository.create(data);
//     return this.municipiosRepository.save(newMunicipio);
//   }

//   async update(id: number, change: UpdateMunicipiosDto) {
//     const municipio = await this.municipiosRepository.findOne(id);
//     this.municipiosRepository.merge(municipio, change);
//     return this.municipiosRepository.save(municipio);
//   }

//   remove(id: number) {
//     return this.municipiosRepository.delete(id);
//   }
}
