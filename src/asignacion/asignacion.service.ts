import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './asignacion.entity';
import { CreateAsignacionDto } from './create-asignacion.dto';
import { Usuario } from '../users/user.entity';
import { Tarea } from '../tarea/tarea.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';

@Injectable()
export class AsignacionService {
  constructor(
    @InjectRepository(Asignacion)
    private readonly repo: Repository<Asignacion>,
    @InjectRepository(Tarea)
    private readonly tareaRepo: Repository<Tarea>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
    @InjectRepository(Organizacion)
    private readonly orgRepo: Repository<Organizacion>,
    @InjectRepository(Voluntario)
    private readonly voluntarioRepo: Repository<Voluntario>,
  ) {}

  async create(dto: CreateAsignacionDto, user: Usuario) {
    const tarea = await this.tareaRepo.findOne({ where: { id_tarea: dto.id_tarea }, relations: ['fase'] });
    if (!tarea) {
      throw new NotFoundException(`Tarea con ID ${dto.id_tarea} no encontrada`);
    }
    await this.checkOrganizacionOwnership(tarea.fase.id_proyecto, user);
    const asignacion = this.repo.create(dto);
    return this.repo.save(asignacion);
  }

  findAllByTarea(idTarea: number) {
    return this.repo.find({ where: { id_tarea: idTarea } });
  }

  async findTasksByVoluntario(id_usuario: number) {
    const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario } });
    if (!voluntario) {
      throw new NotFoundException('Voluntario no encontrado');
    }
    return this.repo.find({ where: { id_voluntario: voluntario.id_voluntario }, relations: ['tarea'] });
  }

  async remove(id: number, user: Usuario) {
    const asignacion = await this.repo.findOne({ where: { id_asignacion: id }, relations: ['tarea', 'tarea.fase'] });
    if (!asignacion) {
      throw new NotFoundException(`Asignacion con ID ${id} no encontrada`);
    }
    await this.checkOrganizacionOwnership(asignacion.tarea.fase.id_proyecto, user);
    return this.repo.remove(asignacion);
  }

  private async checkOrganizacionOwnership(id_proyecto: number, user: Usuario) {
    if (user.tipo_usuario === 'admin') return;

    const proyecto = await this.proyectoRepo.findOne({ where: { id_proyecto } });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con ID ${id_proyecto} no encontrado`);
    }
    const organizacion = await this.orgRepo.findOne({ where: { id_usuario: user.id_usuario } });
    if (!organizacion || proyecto.id_organizacion !== organizacion.id_organizacion) {
      throw new ForbiddenException('No tienes permiso sobre este proyecto.');
    }
  }
}
