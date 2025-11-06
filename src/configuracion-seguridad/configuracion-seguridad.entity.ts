import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Usuario } from '../users/user.entity';

@Entity({ name: 'configuracion_seguridad' })
export class ConfiguracionSeguridad {
  @PrimaryGeneratedColumn({ name: 'id_config_seguridad' })
  id_config_seguridad: number;

  @Column({ name: 'id_usuario' })
  id_usuario: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.configuracionesSeguridad)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column({ name: 'two_factor_enabled', default: false })
  two_factor_enabled: boolean;

  @Column({ name: 'two_factor_secret', length: 255, nullable: true })
  two_factor_secret: string;

  @Column({ name: 'sso_enabled', default: false })
  sso_enabled: boolean;

  @Column({ name: 'sso_provider', length: 50, nullable: true })
  sso_provider: string;

  @Column({ name: 'session_timeout', default: 3600 })
  session_timeout: number;

  @Column({ name: 'ip_whitelist', type: 'text', nullable: true })
  ip_whitelist: string;

  @Column({ name: 'audit_log_enabled', default: false })
  audit_log_enabled: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}

