import { Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';

@Entity()
export class Eventos extends BaseEntity{

//  @PrimaryGeneratedColumn()
//  id: number;

  @Column({ type: 'int' })
  id_empresa_ponente: number;

  @Column({
    type: 'varchar',
    length: 255
  })
  descripcion: string;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  fecha: Date;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  h_inicio: Date;

  @Column({
    type: 'timestamp',
    nullable: true
  })
  h_fin: Date;

  @Column({ type: 'int' })
  tipo_evento: number;

  @Column({
    type: 'varchar',
    length: 255
  })
  lugar: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  url: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  contacto: string;

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
  })
  f_modificacion: Date ;*/
}
