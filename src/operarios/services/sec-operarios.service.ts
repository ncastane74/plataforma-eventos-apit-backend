import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateOperarios,
    UpdateOperarios,
  } from './../dtos/sec-operarios.dtos';
  import { Operarios } from './../entities/sec-operarios.entity';

@Injectable()
export class SecOperariosService {
    constructor(@InjectRepository(Operarios) private OperariosRepository: Repository<Operarios>){}

    findAll() {
      return this.OperariosRepository.find();
    }
  
    async findOne(id: number) {
      const oper = await this.OperariosRepository.findOne(id);
      if (!oper) {
        throw new NotFoundException(`Operario #${id} not found`);
      }
      return oper;
    }
  
    create(data: CreateOperarios) {
      const newOperario = this.OperariosRepository.create(data);
      return this.OperariosRepository.save(newOperario);
    }
  
    async update(id: number, change: UpdateOperarios) {
      const Operarios = await this.OperariosRepository.findOne(id);
      this.OperariosRepository.merge(Operarios, change);
      return this.OperariosRepository.save(Operarios);
    }
  
    remove(id: number) {
      return this.OperariosRepository.delete(id);
    }

}
