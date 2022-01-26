import { Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Paises } from './ext-paises.entity';
import { Municipios } from './ext-municipios.entity';

@Entity()
export class Departamentos {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paises, (pais) => pais.departamentos)
    pais: Paises;

  @Column({
    type: 'varchar',
    length: 50
  })
  nombre: string;

  @OneToMany(() => Municipios, municipio => municipio.departamentos)
  municipios: Municipios[];
}
