import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateEventos,
    UpdateEventos,
  } from './../dtos/env-eventos.dtos';
import { Eventos } from './../entities/env-eventos.entity';

@Injectable()
export class EnvEventosService {
    constructor(@InjectRepository(Eventos) private eventosRepository: Repository<Eventos>){}

    findAll() {
        return this.eventosRepository.find();
      }
    
      async findOne(id: number) {
        const empresaPon = await this.eventosRepository.findOne(id);
        if (!empresaPon) {
          throw new NotFoundException(`Empresa Ponente #${id} not found`);
        }
        return empresaPon;
      }
    
      create(data: CreateEventos) {
        const newEmpresaPonentes = this.eventosRepository.create(data);
        return this.eventosRepository.save(newEmpresaPonentes);
      }
    
      async update(id: number, change: UpdateEventos) {
        const empresasPonentes = await this.eventosRepository.findOne(id);
        this.eventosRepository.merge(empresasPonentes, change);
        return this.eventosRepository.save(empresasPonentes);
      }
    
      remove(id: number) {
        return this.eventosRepository.delete(id);
      }
}
