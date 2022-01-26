import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateEmpresasPonentesDto,
  UpdateEmpresasPonentesDto,
} from './../dtos/emp-empresas-ponentes.dtos';
import { EmpresasPonentes } from './../entities/emp-empresas-ponentes.entity';

@Injectable()
export class EmpEmpresasPonentesService {
  constructor(@InjectRepository(EmpresasPonentes) private empresasPonentesRepository: Repository<EmpresasPonentes>){}

  findAll() {
    return this.empresasPonentesRepository.find();
  }

  async findOne(id: number) {
    const empresaPon = await this.empresasPonentesRepository.findOne(id);
    if (!empresaPon) {
      throw new NotFoundException(`Empresa Ponente #${id} not found`);
    }
    return empresaPon;
  }

  create(data: CreateEmpresasPonentesDto) {
    const newEmpresaPonentes = this.empresasPonentesRepository.create(data);
    return this.empresasPonentesRepository.save(newEmpresaPonentes);
  }

  async update(id: number, change: UpdateEmpresasPonentesDto) {
    const empresasPonentes = await this.empresasPonentesRepository.findOne(id);
    this.empresasPonentesRepository.merge(empresasPonentes, change);
    return this.empresasPonentesRepository.save(empresasPonentes);
  }

  remove(id: number) {
    return this.empresasPonentesRepository.delete(id);
  }
}
