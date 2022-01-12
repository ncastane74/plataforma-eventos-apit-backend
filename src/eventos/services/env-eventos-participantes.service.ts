import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateEventosParticipantes,
    UpdateEventosParticipantes,
  } from './../dtos/env-eventos-participantes.dtos';
import { EventosParticipantes } from './../entities/env-eventos-participantes.entity';

@Injectable()
export class EnvEventosParticipantesService {
    constructor(@InjectRepository(EventosParticipantes) private eventosParticipantesRepository: Repository<EventosParticipantes>){}

    findAll() {
        return this.eventosParticipantesRepository.find();
      }
    
      async findOne(id: number) {
        const empresaPon = await this.eventosParticipantesRepository.findOne(id);
        if (!empresaPon) {
          throw new NotFoundException(`Empresa Ponente #${id} not found`);
        }
        return empresaPon;
      }
    
      create(data: CreateEventosParticipantes) {
        const newEmpresaPonentes = this.eventosParticipantesRepository.create(data);
        return this.eventosParticipantesRepository.save(newEmpresaPonentes);
      }
    
      async update(id: number, change: UpdateEventosParticipantes) {
        const empresasPonentes = await this.eventosParticipantesRepository.findOne(id);
        this.eventosParticipantesRepository.merge(empresasPonentes, change);
        return this.eventosParticipantesRepository.save(empresasPonentes);
      }
    
      remove(id: number) {
        return this.eventosParticipantesRepository.delete(id);
      }
}
