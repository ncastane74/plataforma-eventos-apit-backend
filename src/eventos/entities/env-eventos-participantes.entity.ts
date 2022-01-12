import { Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';

@Entity()
export class EventosParticipantes extends BaseEntity{

/*  @PrimaryGeneratedColumn()
  id: number;*/

  @Column({ type: 'int' })
  id_persona: number;

  @Column({ type: 'int' })
  id_evento: number;

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
