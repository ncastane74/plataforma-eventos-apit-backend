import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateEventosEstados,
    UpdateEventosEstados,
  } from './../dtos/env-eventos-estados.dtos';
import { EventosEstados } from './../entities/env-eventos-estados.entity';

@Injectable()
export class EnvEventosEstadosService {
    constructor(@InjectRepository(EventosEstados) private eventosEstadosRepository: Repository<EventosEstados>){}

    findAll() {
        return this.eventosEstadosRepository.find();
      }
    
      async findOne(id: number) {
        const empresaPon = await this.eventosEstadosRepository.findOne(id);
        if (!empresaPon) {
          throw new NotFoundException(`Empresa Ponente #${id} not found`);
        }
        return empresaPon;
      }
    
      create(data: CreateEventosEstados) {
        const newEmpresaPonentes = this.eventosEstadosRepository.create(data);
        return this.eventosEstadosRepository.save(newEmpresaPonentes);
      }
    
      async update(id: number, change: UpdateEventosEstados) {
        const empresasPonentes = await this.eventosEstadosRepository.findOne(id);
        this.eventosEstadosRepository.merge(empresasPonentes, change);
        return this.eventosEstadosRepository.save(empresasPonentes);
      }
    
      remove(id: number) {
        return this.eventosEstadosRepository.delete(id);
      }

}
