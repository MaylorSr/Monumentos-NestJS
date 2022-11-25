import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monumento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  pais: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  urlImg: string;
  @Column()
  lat: number;
  @Column()
  log: number;
}
