import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreatePersonasInst,
    UpdatePersonasInst,
  } from './../dtos/per-personas-inst.dtos';
  import { PersonasInst } from './../entities/per-personas-inst.entity';

@Injectable()
export class PerPersonasInstService {
    constructor(@InjectRepository(PersonasInst) private PersonasInstRepository: Repository<PersonasInst>){}
    
    findAll() {
        return this.PersonasInstRepository.find();
      }
    
      async findOne(id: number) {
        const personains = await this.PersonasInstRepository.findOne(id);
        if (!personains) {
          throw new NotFoundException(`Persona institucion #${id} not found`);
        }
        return personains;
      }
    
      create(data: CreatePersonasInst) {
        const newPersonasInst = this.PersonasInstRepository.create(data);
        return this.PersonasInstRepository.save(newPersonasInst);
      }
    
      async update(id: number, change: UpdatePersonasInst) {
        const PersonasInst = await this.PersonasInstRepository.findOne(id);
        this.PersonasInstRepository.merge(PersonasInst, change);
        return this.PersonasInstRepository.save(PersonasInst);
      }
    
      remove(id: number) {
        return this.PersonasInstRepository.delete(id);
      }

}
