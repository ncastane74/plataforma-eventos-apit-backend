import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreatePerfiles,
    UpdatePerfiles,
  } from './../dtos/sec-perfiles.dtos';
  import { Perfiles } from './../entities/sec-perfiles.entity';

@Injectable()
export class SecPerfilesService {
    constructor(@InjectRepository(Perfiles) private PerfilesRepository: Repository<Perfiles>){}

    findAll() {
      return this.PerfilesRepository.find();
    }
  
    async findOne(id: number) {
      const per = await this.PerfilesRepository.findOne(id);
      if (!per) {
        throw new NotFoundException(`Estato operario #${id} not found`);
      }
      return per;
    }
  
    create(data: CreatePerfiles) {
      const newPerfiles = this.PerfilesRepository.create(data);
      return this.PerfilesRepository.save(newPerfiles);
    }
  
    async update(id: number, change: UpdatePerfiles) {
      const Perfiles = await this.PerfilesRepository.findOne(id);
      this.PerfilesRepository.merge(Perfiles, change);
      return this.PerfilesRepository.save(Perfiles);
    }
  
    remove(id: number) {
      return this.PerfilesRepository.delete(id);
    }
}
