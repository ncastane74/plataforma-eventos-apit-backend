import { Column,
  Entity,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';
import { Municipios } from './ext-municipios.entity';

@Entity()
export class Empresas extends BaseEntity{

  @Column({
    type: 'varchar',
    length: 50
  })
  nit: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  razon_social: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  direccion: string;

  @Column({
    type: 'varchar',
    length: 20
  })
  telefono: string;

  @Column({ type: 'int' })
  estado: number;

  @Column({ type: 'int' })
  id_operario_creacion: number;

  @Column({ type: 'int' })
  id_operario_modificacion: number;

  @ManyToOne(() => Municipios, (municipio) => municipio.empresas)
  municipio: Municipios;

}
