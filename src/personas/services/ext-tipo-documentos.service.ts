import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
    CreateTiposDocumentos,
    UpdateTiposDocumentos,
  } from './../dtos/ext-tipos-documentos.dtos';
  import { TiposDocumentos } from './../entities/ext-tipos-documentos.entity';

@Injectable()
export class ExtTipoDocumentosService {
    constructor(@InjectRepository(TiposDocumentos) private TiposDocumentosRepository: Repository<TiposDocumentos>){}
    
    findAll() {
        return this.TiposDocumentosRepository.find();
      }
    
      async findOne(id: number) {
        const tipodoc = await this.TiposDocumentosRepository.findOne(id);
        if (!tipodoc) {
          throw new NotFoundException(`Tipo de documento #${id} not found`);
        }
        return tipodoc;
      }
    
      create(data: CreateTiposDocumentos) {
        const newTiposDocumentos = this.TiposDocumentosRepository.create(data);
        return this.TiposDocumentosRepository.save(newTiposDocumentos);
      }
    
      async update(id: number, change: UpdateTiposDocumentos) {
        const TiposDocumentos = await this.TiposDocumentosRepository.findOne(id);
        this.TiposDocumentosRepository.merge(TiposDocumentos, change);
        return this.TiposDocumentosRepository.save(TiposDocumentos);
      }
    
      remove(id: number) {
        return this.TiposDocumentosRepository.delete(id);
      }

}
