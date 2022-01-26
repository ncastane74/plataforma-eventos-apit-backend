import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateDepartamentosDto,
    UpdateDepartamentoDto,
  } from './../dtos/ext-departamentos.dtos';
  
import { Departamentos } from './../entities/ext-departamentos.entity';

import { ExtPaisesService } from './ext-paises.service';

@Injectable()
export class ExtDepartamentosService {
  constructor(
    @InjectRepository(Departamentos) private departamentosRepository: Repository<Departamentos>,
    private extPaisesService: ExtPaisesService,
  ){}

  findAll() {
    return this.departamentosRepository.find({
      relations: ['pais']
    });
  }

  async findOne(id: number) {
    const departamentoPon = await this.departamentosRepository.findOne(id, {
      relations: ['pais']
    });
    if (!departamentoPon) {
      throw new NotFoundException(`Departamento #${id} not found`);
    }
    return departamentoPon;
  }

  // async create(data: CreateDepartamentosDto) {
  //   const newDepartamento = this.departamentosRepository.create(data);
  //   if(data.id_pais){
  //     const idpais = await this.extPaisesService.findOne(data.id_pais)
  //     newDepartamento.pais = idpais;
  //   }
  //   return this.departamentosRepository.save(newDepartamento);
  // }

  // async update(id: number, changes: UpdateDepartamentoDto) {
  //   const departamento = await this.departamentosRepository.findOne(id);
  //   if(changes.id_pais){
  //     const idpais = await this.extPaisesService.findOne(changes.id_pais)
  //     departamento.pais = idpais;
  //   }
  //   this.departamentosRepository.merge(departamento, changes);
  //   return this.departamentosRepository.save(departamento);
  // }

  // remove(id: number) {
  //   return this.departamentosRepository.delete(id);
  // }
}
