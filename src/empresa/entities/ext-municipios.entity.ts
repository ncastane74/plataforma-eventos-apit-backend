import { Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Departamentos } from './ext-departamentos.entity';

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
}
