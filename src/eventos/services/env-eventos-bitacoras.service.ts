import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateEventosBitacoras,
    UpdateEventosBitacoras,
  } from './../dtos/env-eventos-bitacoras.dtos';
import { EventosBitacoras } from './../entities/env-eventos-bitacoras.entity';

@Injectable()
export class EnvEventosBitacorasService {
    constructor(@InjectRepository(EventosBitacoras) private eventosBitacorasRepository: Repository<EventosBitacoras>){}

    findAll() {
        return this.eventosBitacorasRepository.find();
      }
    
      async findOne(id: number) {
        const empresaPon = await this.eventosBitacorasRepository.findOne(id);
        if (!empresaPon) {
          throw new NotFoundException(`Empresa Ponente #${id} not found`);
        }
        return empresaPon;
      }
    
      create(data: CreateEventosBitacoras) {
        const newEmpresaPonentes = this.eventosBitacorasRepository.create(data);
        return this.eventosBitacorasRepository.save(newEmpresaPonentes);
      }
    
      async update(id: number, change: UpdateEventosBitacoras) {
        const empresasPonentes = await this.eventosBitacorasRepository.findOne(id);
        this.eventosBitacorasRepository.merge(empresasPonentes, change);
        return this.eventosBitacorasRepository.save(empresasPonentes);
      }
    
      remove(id: number) {
        return this.eventosBitacorasRepository.delete(id);
      }
}
