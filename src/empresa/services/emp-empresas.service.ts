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
  // private counterId = 1;
  // private empresas: Empresas[] = [
  //   {
  //     id: 1,
  //     nit: '91232356',
  //     razon_social: 'Empresa Prueba',
  //     id_municipio: 10,
  //     direccion: 'calle 10 32 - 89',
  //     telefono: '321-5654546',
  //     estado: 1,
  //     id_operario_creacion: 1,
  //     id_operario_modificacion: 2,
  //     f_creacion: '2021-12-21 10:35:00',
  //     f_modificacion: '2021-12-22 11:35:00',
  //   },
  // ];

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
