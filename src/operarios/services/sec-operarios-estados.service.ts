import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateOperariosEstados,
    UpdateOperariosEstados,
  } from './../dtos/sec-operarios-estados.dtos';
  import { OperariosEstados } from './../entities/sec-operarios-estados.entity';
  
@Injectable()
export class SecOperariosEstadosService {
    constructor(@InjectRepository(OperariosEstados) private OperariosEstadosRepository: Repository<OperariosEstados>){}

    findAll() {
      return this.OperariosEstadosRepository.find();
    }
  
    async findOne(id: number) {
      const estadoper = await this.OperariosEstadosRepository.findOne(id);
      if (!estadoper) {
        throw new NotFoundException(`Estato operario #${id} not found`);
      }
      return estadoper;
    }
  
    create(data: CreateOperariosEstados) {
      const newOperariosEstados = this.OperariosEstadosRepository.create(data);
      return this.OperariosEstadosRepository.save(newOperariosEstados);
    }
  
    async update(id: number, change: UpdateOperariosEstados) {
      const OperariosEstados = await this.OperariosEstadosRepository.findOne(id);
      this.OperariosEstadosRepository.merge(OperariosEstados, change);
      return this.OperariosEstadosRepository.save(OperariosEstados);
    }
  
    remove(id: number) {
      return this.OperariosEstadosRepository.delete(id);
    }

}
