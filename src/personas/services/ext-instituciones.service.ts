import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateInstituciones,
    UpdateInstituciones,
  } from './../dtos/ext-instituciones.dtos';
  import { Instituciones } from './../entities/ext-instituciones.entity';

@Injectable()
export class ExtInstitucionesService {
    constructor(@InjectRepository(Instituciones) private InstitucionesRepository: Repository<Instituciones>){}
    
    findAll() {
        return this.InstitucionesRepository.find();
      }
    
      async findOne(id: number) {
        const institu = await this.InstitucionesRepository.findOne(id);
        if (!institu) {
          throw new NotFoundException(`Institucion #${id} not found`);
        }
        return institu;
      }
    
      create(data: CreateInstituciones) {
        const newInstituciones = this.InstitucionesRepository.create(data);
        return this.InstitucionesRepository.save(newInstituciones);
      }
    
      async update(id: number, change: UpdateInstituciones) {
        const Instituciones = await this.InstitucionesRepository.findOne(id);
        this.InstitucionesRepository.merge(Instituciones, change);
        return this.InstitucionesRepository.save(Instituciones);
      }
    
      remove(id: number) {
        return this.InstitucionesRepository.delete(id);
      }

}
