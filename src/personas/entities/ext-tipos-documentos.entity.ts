import { Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from '../../database/base.entity';

@Entity()

export class TiposDocumentos extends BaseEntity{
  
  /*  @PrimaryGeneratedColumn()
  id: number;*/

  @Column({
    type: 'varchar',
    length: 255
  })
  nombre: string;

}
