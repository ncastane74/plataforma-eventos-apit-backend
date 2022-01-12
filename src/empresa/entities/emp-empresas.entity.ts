import { Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';

@Entity()
export class Empresas extends BaseEntity{

/*  @PrimaryGeneratedColumn()
  id: number;*/

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

  @Column({ type: 'int' })
  id_municipio: number;

  @Column({
    type: 'varchar',
    length: 255
  })
  direccion: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  telefono: string;

  @Column({ type: 'int' })
  estado: number;

  @Column({ type: 'int' })
  id_operario_creacion: number;

  @Column({ type: 'int' })
  id_operario_modificacion: number;

/*  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  f_creacion: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  f_modificacion: Date ;*/
}
