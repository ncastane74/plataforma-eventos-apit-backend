import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateEmpresasDto, UpdateEmpresasDto } from './../dtos/emp-empresas.dtos';
import { Empresas } from './../entities/emp-empresas.entity';

@Injectable()
export class EmpEmpresasService {
    private counterId = 1;
    private empresas: Empresas[] = [
        {
            id: 1,
            nit: '91232356',
            razon_social:'Empresa Prueba',
            id_municipio: 10,
            direccion: 'calle 10 32 - 89',
            telefono: '321-5654546',
            estado: 1,
            id_operario_creacion: 1,
            id_operario_modificacion: 2,
            f_creacion: '2021-12-21 10:35:00',
            f_modificacion: '2021-12-22 11:35:00',
        },
    ];

    findAll() {
        return this.empresas;
    }

    findOne(id: number){
        const empresaPon = this.empresas.find((item) => item.id === id);
        if(!empresaPon) {
            throw new NotFoundException(`Empresa #${id} not found`);
        }
        return empresaPon;
    }

    create(payload: CreateEmpresasDto) {
        this.counterId = this.counterId + 1; 
        const newEmpresa = {
            id:this.counterId,
            ... payload,
        };
        this.empresas.push(newEmpresa);
        return newEmpresa;
    }

    update(id: number, payload: UpdateEmpresasDto) {
        const empresa = this.findOne(id);
        const index = this.empresas.findIndex((item) => item.id === id);
          this.empresas[index] = {
              ...empresa,
              ...payload,
          };
          return this.empresas[index];
      }

      remove(id: number) {
        const index = this.empresas.findIndex((item) => item.id === id);
        if (index === -1) {
          throw new NotFoundException(`Empresa #${id} not found`);
        }
        this.empresas.splice(index, 1);
        return true;
      }
}