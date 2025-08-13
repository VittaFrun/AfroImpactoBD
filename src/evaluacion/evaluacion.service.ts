import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from './evaluacion.entity';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { Usuario } from '../users/user.entity';
import { Proyecto } from '../proyecto/proyecto.entity';
import { Organizacion } from '../organizacion/organizacion.entity';
import { Voluntario } from '../voluntario/voluntario.entity';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private readonly repo: Repository<Evaluacion>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepo: Repository<Proyecto>,
    @InjectRepository(Organizacion)
    private readonly orgRepo: Repository<Organizacion>,
    @InjectRepository(Voluntario)
    private readonly voluntarioRepo: Repository<Voluntario>,
  ) {}

  async create(dto: CreateEvaluacionDto, user: Usuario) {
    await this.checkOrganizacionOwnership(dto.id_proyecto, user);
    const evaluacion = this.repo.create(dto);
    return this.repo.save(evaluacion);
  }

  findAllByProyecto(idProyecto: number) {
    return this.repo.find({ where: { id_proyecto: idProyecto } });
  }

  async findAllByVoluntario(idVoluntario: number, user: Usuario) {
    if (user.tipo_usuario === 'voluntario') {
      const voluntario = await this.voluntarioRepo.findOne({ where: { id_usuario: user.id_usuario } });
      if (!voluntario || voluntario.id_voluntario !== idVoluntario) {
        throw new ForbiddenException('No tienes permiso para ver estas evaluaciones.');
      }
    }
    return this.repo.find({ where: { id_voluntario: idVoluntario } });
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
