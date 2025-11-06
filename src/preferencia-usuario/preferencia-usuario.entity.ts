import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../users/user.entity';

@Entity({ name: 'preferencia_usuario' })
export class PreferenciaUsuario {
  @PrimaryGeneratedColumn({ name: 'id_preferencia' })
  id_preferencia: number;

  @Column({ name: 'id_usuario' })
  id_usuario: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.preferencias)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ name: 'notificaciones_email', default: true })
  notificaciones_email: boolean;

  @Column({ name: 'resumen_semanal', default: true })
  resumen_semanal: boolean;

  @Column({ default: true })
  recordatorios: boolean;

  @Column({ name: 'notificaciones_push', default: true })
  notificaciones_push: boolean;

  @Column({ name: 'modo_oscuro', default: false })
  modo_oscuro: boolean;

  @Column({ length: 10, default: 'es' })
  idioma: string;

  @Column({ name: 'zona_horaria', length: 50, default: 'America/Bogota' })
  zona_horaria: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}

