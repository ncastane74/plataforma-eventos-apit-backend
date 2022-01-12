import { Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';

@Entity()
export class EventosParticipantesEstados extends BaseEntity{

/*  @PrimaryGeneratedColumn()
  id: number;*/

  @Column({ type: 'int' })
  id_evento_participante: number;

  @Column({ type: 'int' })
  estado: number;

  @Column({
    type: 'varchar',
    length: 255
  })
  observacion: string;

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
