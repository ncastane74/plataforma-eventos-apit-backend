import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateEventosParticipantesEstados,
    UpdateEventosParticipantesEstados,
  } from './../dtos/env-eventos-participantes-estados.dtos';
import { EventosParticipantesEstados } from './../entities/env-eventos-participantes-estados.entity';

@Injectable()
export class EnvEventosParticipantesEstadosService {
    constructor(@InjectRepository(EventosParticipantesEstados) private eventosParticipantesEstadosRepository: Repository<EventosParticipantesEstados>){}

    findAll() {
        return this.eventosParticipantesEstadosRepository.find();
      }
    
      async findOne(id: number) {
        const empresaPon = await this.eventosParticipantesEstadosRepository.findOne(id);
        if (!empresaPon) {
          throw new NotFoundException(`Empresa Ponente #${id} not found`);
        }
        return empresaPon;
      }
    
      create(data: CreateEventosParticipantesEstados) {
        const newEmpresaPonentes = this.eventosParticipantesEstadosRepository.create(data);
        return this.eventosParticipantesEstadosRepository.save(newEmpresaPonentes);
      }
    
      async update(id: number, change: UpdateEventosParticipantesEstados) {
        const empresasPonentes = await this.eventosParticipantesEstadosRepository.findOne(id);
        this.eventosParticipantesEstadosRepository.merge(empresasPonentes, change);
        return this.eventosParticipantesEstadosRepository.save(empresasPonentes);
      }
    
      remove(id: number) {
        return this.eventosParticipantesEstadosRepository.delete(id);
      }
}
