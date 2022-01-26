import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CreateEmpresasDto,
  UpdateEmpresasDto,
} from './../dtos/emp-empresas.dtos';
import { Empresas } from './../entities/emp-empresas.entity';

@Injectable()
export class EmpEmpresasService {
  constructor(@InjectRepository(Empresas) private empresasRepository: Repository<Empresas>){}

  findAll() {
    return this.empresasRepository.find();
  }

  async findOne(id: number) {
    const empresa = await this.empresasRepository.findOne(id);
    if (!empresa) {
      throw new NotFoundException(`Empresa #${id} not found`);
    }
    return empresa;
  }

  create(data: CreateEmpresasDto) {
    const newEmpresa = this.empresasRepository.create(data);
    return this.empresasRepository.save(newEmpresa);
  }

  async update(id: number, change: UpdateEmpresasDto) {
    const empresas = await this.empresasRepository.findOne(id);
    this.empresasRepository.merge(empresas, change);
    return this.empresasRepository.save(empresas);
  }

  remove(id: number) {
    return this.empresasRepository.delete(id);
  }
}
