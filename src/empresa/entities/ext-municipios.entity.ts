import { Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Municipios {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_departamento: number;

  @Column({
    type: 'varchar',
    length: 50
  })
  nombre: string;
}
