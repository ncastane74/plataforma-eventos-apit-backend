import { Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Departamentos } from './ext-departamentos.entity';
import { Empresas } from './emp-empresas.entity';

@Entity()
export class Municipios {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Departamentos, departamento => departamento.municipios)
  departamentos: Departamentos;

  @Column({
    type: 'varchar',
    length: 50
  })
  nombre: string;

  @OneToMany(() => Empresas, (empresas) => empresas.municipio)
  empresas: Empresas[];
}
