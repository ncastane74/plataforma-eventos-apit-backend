import { Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Departamentos } from './ext-departamentos.entity';

@Entity()
export class Paises {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50
  })
  nombre: string;

  @OneToMany(() => Departamentos, (departamento) => departamento.pais)
  departamentos: Departamentos[];
}