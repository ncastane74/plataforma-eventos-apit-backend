import { CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
  } from 'typeorm';

export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
      })
      f_creacion: Date;
    
      @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
      })
      f_modificacion: Date ;

}