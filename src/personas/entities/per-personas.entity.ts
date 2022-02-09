import { Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';

@Entity()

export class Personas extends BaseEntity{

    /*  @PrimaryGeneratedColumn()
  id: number;*/

  @Column({ type: 'int' })
  id_tipo_documento: number;

  @Column({
    type: 'varchar',
    length: 255
  })
  di: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  primer_nombre: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  segundo_nombre: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  primer_apellido: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  segundo_apellido: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  celular: string;

  @Column({ type: 'int' })
  id_operario_creacion: number;

  @Column({ type: 'int' })
  id_operario_modificion: number;

  /*  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  f_creacion: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })*/
}
