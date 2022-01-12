import { Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

import { Paises } from './ext-paises.entity'

@Entity()
export class Departamentos {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paises, id_pais => id_pais.departamentos)
  id_pais: Paises;

  @Column({
    type: 'varchar',
    length: 50
  })
  nombre: string;
}
