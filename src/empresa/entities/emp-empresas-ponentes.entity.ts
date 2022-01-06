import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EmpresasPonentes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_persona: number;

  @Column({ type: 'int' })
  id_empresa: number;

  @Column({ type: 'varchar', length: 255})
  descripcion: string;

  @Column({ type: 'int' })
  id_operario_creacion: number;

  @Column({ type: 'int' })
  id_operario_modificion: number;

  @Column({ type: 'varchar', length: 255})
  f_creacion: Date;
  f_modificacion: Date ;
}
