import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { VoluntarioLogro } from '../voluntario-logro/voluntario-logro.entity';

@Entity({ name: 'logro' })
export class Logro {
  @PrimaryGeneratedColumn({ name: 'id_logro' })
  id_logro: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column({ length: 50, nullable: true })
  icono: string;

  @Column({ default: 0 })
  puntos: number;

  @Column({ length: 50 })
  tipo: string;

  @Column('text', { nullable: true })
  condicion: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @OneToMany(() => VoluntarioLogro, (voluntarioLogro) => voluntarioLogro.logro)
  voluntarioLogros: VoluntarioLogro[];
}

