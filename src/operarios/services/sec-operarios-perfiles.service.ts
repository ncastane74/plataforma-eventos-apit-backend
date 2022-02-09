import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateOperariosPerfiles,
    UpdateOperariosPerfiles,
  } from './../dtos/sec-operarios-perfiles.dtos';
  import { OperariosPerfiles } from './../entities/sec-operarios-perfiles.entity';

@Injectable()
export class SecOperariosPerfilesService {
    constructor(@InjectRepository(OperariosPerfiles) private OperariosPerfilesRepository: Repository<OperariosPerfiles>){}

    findAll() {
      return this.OperariosPerfilesRepository.find();
    }
  
    async findOne(id: number) {
      const perfiloper = await this.OperariosPerfilesRepository.findOne(id);
      if (!perfiloper) {
        throw new NotFoundException(`Perfil #${id} not found`);
      }
      return perfiloper;
    }
  
    create(data: CreateOperariosPerfiles) {
      const newOperariosPerfiles = this.OperariosPerfilesRepository.create(data);
      return this.OperariosPerfilesRepository.save(newOperariosPerfiles);
    }
  
    async update(id: number, change: UpdateOperariosPerfiles) {
      const newOperariosPerfiles = await this.OperariosPerfilesRepository.findOne(id);
      this.OperariosPerfilesRepository.merge(newOperariosPerfiles, change);
      return this.OperariosPerfilesRepository.save(newOperariosPerfiles);
    }
  
    remove(id: number) {
      return this.OperariosPerfilesRepository.delete(id);
    }

}
