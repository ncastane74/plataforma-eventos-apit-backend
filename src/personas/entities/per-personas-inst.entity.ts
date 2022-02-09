import { Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';

@Entity()


export class PersonasInst extends BaseEntity{

  /*  @PrimaryGeneratedColumn()
  id: number;*/

  @Column({ type: 'int' })
  id_persona: number;

  @Column({ type: 'int' })
  id_instucion: number;

  @Column({
    type: 'varchar',
    length: 255
  })
  nombre_inst_otro: string;

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
