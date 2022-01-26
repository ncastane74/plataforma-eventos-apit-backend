import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreatePaisesDto,
    UpdatePaisesDto,
  } from './../dtos/ext-paises.dtos';

import { Paises } from './../entities/ext-paises.entity';

@Injectable()
export class ExtPaisesService {
    constructor(@InjectRepository(Paises) private paisesRepository: Repository<Paises>){}

  findAll() {
    return this.paisesRepository.find();
  }

  async findOne(id: number) {
    const paisPon = await this.paisesRepository.findOne(id, {
      relations: ['departamentos']
    });
    if (!paisPon) {
      throw new NotFoundException(`Pais #${id} not found`);
    }
    return paisPon;
  }

  // create(data: CreatePaisesDto) {
  //   const newPais = this.paisesRepository.create(data);
  //   return this.paisesRepository.save(newPais);
  // }

  // async update(id: number, change: UpdatePaisesDto) {
  //   const pais = await this.paisesRepository.findOne(id);
  //   this.paisesRepository.merge(pais, change);
  //   return this.paisesRepository.save(pais);
  // }

  // remove(id: number) {
  //   return this.paisesRepository.delete(id);
  // }
}
