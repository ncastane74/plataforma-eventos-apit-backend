import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreatePersonas,
    UpdatePersonas,
  } from './../dtos/per-personas.dtos';
  import { Personas } from './../entities/per-personas.entity';

@Injectable()
export class PerPersonasService {
    constructor(@InjectRepository(Personas) private PersonasRepository: Repository<Personas>){}
    
    findAll() {
        return this.PersonasRepository.find();
      }
    
      async findOne(id: number) {
        const per = await this.PersonasRepository.findOne(id);
        if (!per) {
          throw new NotFoundException(`Persona #${id} not found`);
        }
        return per;
      }
    
      create(data: CreatePersonas) {
        const newPersonas = this.PersonasRepository.create(data);
        return this.PersonasRepository.save(newPersonas);
      }
    
      async update(id: number, change: UpdatePersonas) {
        const Personas = await this.PersonasRepository.findOne(id);
        this.PersonasRepository.merge(Personas, change);
        return this.PersonasRepository.save(Personas);
      }
    
      remove(id: number) {
        return this.PersonasRepository.delete(id);
      }

}
