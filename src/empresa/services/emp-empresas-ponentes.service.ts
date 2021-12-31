import { Injectable, NotFoundException } from '@nestjs/common';

import {
  CreateEmpresasPonentesDto,
  UpdateEmpresasPonentesDto,
} from './../dtos/emp-empresas-ponentes.dtos';
import { EmpresasPonentes } from './../entities/emp-empresas-ponentes.entity';

@Injectable()
export class EmpEmpresasPonentesService {
  private counterId = 1;
  private empresasPonentes: EmpresasPonentes[] = [
    {
      id: 1,
      id_persona: 2,
      id_empresa: 3,
      descripcion: 'Empresa Ponentes',
      id_operario_creacion: 4,
      id_operario_modificion: 5,
      f_creacion: '2021-12-20 23:00:00',
      f_modificacion: '2021-12-21 09:00:00',
    },
  ];

  findAll() {
    return this.empresasPonentes;
  }

  findOne(id: number) {
    const empresaPon = this.empresasPonentes.find((item) => item.id === id);
    if (!empresaPon) {
      throw new NotFoundException(`Empresa Ponente #${id} not found`);
    }
    return empresaPon;
  }

  create(payload: CreateEmpresasPonentesDto) {
    this.counterId = this.counterId + 1;
    const newEmpresaPonentes = {
      id: this.counterId,
      ...payload,
    };
    this.empresasPonentes.push(newEmpresaPonentes);
    return newEmpresaPonentes;
  }

  update(id: number, payload: UpdateEmpresasPonentesDto) {
    const empresasPonentes = this.findOne(id);
    const index = this.empresasPonentes.findIndex((item) => item.id === id);
    this.empresasPonentes[index] = {
      ...empresasPonentes,
      ...payload,
    };
    return this.empresasPonentes[index];
  }

  remove(id: number) {
    const index = this.empresasPonentes.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Empresa Ponente #${id} not found`);
    }
    this.empresasPonentes.splice(index, 1);
    return true;
  }
}
