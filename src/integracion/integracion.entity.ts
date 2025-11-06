import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../users/user.entity';

@Entity({ name: 'integracion' })
export class Integracion {
  @PrimaryGeneratedColumn({ name: 'id_integracion' })
  id_integracion: number;

  @Column({ name: 'id_usuario' })
  id_usuario: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.integraciones)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ length: 50 })
  tipo: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ default: false })
  habilitada: boolean;

  @Column({ name: 'token_acceso', type: 'text', nullable: true })
  token_acceso: string;

  @Column({ name: 'token_refresh', type: 'text', nullable: true })
  token_refresh: string;

  @Column({ type: 'text', nullable: true })
  configuracion: string;

  @Column({ name: 'expiracion_token', type: 'datetime', nullable: true })
  expiracion_token: Date;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}

