import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { VoluntarioService } from '../voluntario/voluntario.service';
import { OrganizacionService } from '../organizacion/organizacion.service';
import { ProyectoService } from '../proyecto/proyecto.service';
import { DonacionService } from '../donacion/donacion.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private voluntarioService: VoluntarioService,
    private organizacionService: OrganizacionService,
    private proyectoService: ProyectoService,
    private donacionService: DonacionService,
  ) {}

  //Loguea un usuario y devuelve un token de acceso
  async login(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: user.id_usuario,
      nombre: user.nombre,
      email: user.email,
      tipo_usuario: user.tipo_usuario // <-- AÑADE ESTA LÍNEA
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  //Registra un nuevo usuario
  async register(registerDto: RegisterUserDto) {
    const existingUser = await this.usersService.findOneByEmail(
      registerDto.email,
    );
    if (existingUser) {
      throw new ConflictException('El correo electrónico ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const newUser = await this.usersService.create({
      nombre: registerDto.nombre,
      email: registerDto.email,
      password: hashedPassword,
      tipo_usuario: registerDto.tipo_usuario,
      id_rol: registerDto.id_rol,
    });

    if (registerDto.tipo_usuario === 'voluntario') {
      await this.voluntarioService.createBasic(newUser.id_usuario);
    } else if (registerDto.tipo_usuario === 'organizacion') {
      await this.organizacionService.createBasic(newUser.id_usuario, registerDto.nombre, registerDto.tipo_usuario);
    }

    //Devuelve el usuario creado sin la contraseña
    const { password, ...result } = newUser;
    return result;
  }

  async getDashboardData(userPayload: any) {
    console.log('Fetching dashboard data for user:', userPayload.sub);

    try {
      const user = await this.usersService.findOne(userPayload.sub);
      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }

      let metrics = [];
      let recentActivities = [];
      let upcomingTasks = [];
      let projectStatusData = [];
      let donationTrendData = [];

      if (user.tipo_usuario === 'organizacion') {
        // Obtener datos específicos para organizaciones
        const organizacion = await this.organizacionService.findByUserId(user.id_usuario);
        if (organizacion) {
          // Obtener proyectos de la organización
          const proyectos = await this.proyectoService.findAll(user);
          const proyectosActivos = proyectos.filter(p => p.id_estado === 1).length;
          
          // Obtener donaciones de la organización
          const donaciones = await this.donacionService.findByOrganizacion(organizacion.id_organizacion);
          const donacionesEsteMes = donaciones.filter(d => {
            const fechaDonacion = new Date(d.fecha);
            const ahora = new Date();
            return fechaDonacion.getMonth() === ahora.getMonth() && 
                   fechaDonacion.getFullYear() === ahora.getFullYear();
          });
          const totalDonaciones = donacionesEsteMes.reduce((sum, d) => sum + d.monto_total, 0);

          // Contar tareas pendientes
          let tareasPendientes = 0;
          proyectos.forEach(proyecto => {
            if (proyecto.fases) {
              proyecto.fases.forEach(fase => {
                if (fase.tareas) {
                  tareasPendientes += fase.tareas.filter(t => t.id_estado === 1).length;
                }
              });
            }
          });

          metrics = [
            { title: "Proyectos Activos", value: proyectosActivos.toString(), icon: "mdi-folder-heart", color: "primary" },
            { title: "Total Proyectos", value: proyectos.length.toString(), icon: "mdi-folder-multiple", color: "info" },
            { title: "Donaciones (Este Mes)", value: `$${totalDonaciones.toLocaleString()}`, icon: "mdi-cash-multiple", color: "success" },
            { title: "Tareas Pendientes", value: tareasPendientes.toString(), icon: "mdi-format-list-checks", color: "warning" }
          ];

          // Generar actividades recientes
          recentActivities = proyectos.slice(0, 5).map(proyecto => ({
            id: proyecto.id_proyecto,
            type: 'project',
            title: `Proyecto "${proyecto.nombre}" actualizado`,
            description: `Última actualización: ${new Date(proyecto.actualizado_en).toLocaleDateString()}`,
            timestamp: proyecto.actualizado_en,
            icon: 'mdi-folder-edit'
          }));

          // Generar tareas próximas
          upcomingTasks = [];
          proyectos.forEach(proyecto => {
            if (proyecto.fases) {
              proyecto.fases.forEach(fase => {
                if (fase.tareas) {
                  fase.tareas.forEach(tarea => {
                    const fechaFin = new Date(tarea.fecha_fin);
                    const ahora = new Date();
                    const diasRestantes = Math.ceil((fechaFin.getTime() - ahora.getTime()) / (1000 * 60 * 60 * 24));
                    
                    if (diasRestantes <= 7 && diasRestantes >= 0) {
                      upcomingTasks.push({
                        id: tarea.id_tarea,
                        title: tarea.descripcion,
                        project: proyecto.nombre,
                        dueDate: tarea.fecha_fin,
                        priority: tarea.prioridad,
                        daysLeft: diasRestantes
                      });
                    }
                  });
                }
              });
            }
          });

          // Datos de estado de proyectos
          projectStatusData = [
            { name: 'Activos', value: proyectosActivos, color: '#00b894' },
            { name: 'En Progreso', value: proyectos.filter(p => p.id_estado === 2).length, color: '#fdcb6e' },
            { name: 'Completados', value: proyectos.filter(p => p.id_estado === 3).length, color: '#6c5ce7' },
            { name: 'Pausados', value: proyectos.filter(p => p.id_estado === 4).length, color: '#fd79a8' }
          ];

          // Datos de tendencia de donaciones (últimos 6 meses)
          donationTrendData = [];
          for (let i = 5; i >= 0; i--) {
            const fecha = new Date();
            fecha.setMonth(fecha.getMonth() - i);
            const donacionesMes = donaciones.filter(d => {
              const fechaDonacion = new Date(d.fecha);
              return fechaDonacion.getMonth() === fecha.getMonth() && 
                     fechaDonacion.getFullYear() === fecha.getFullYear();
            });
            const totalMes = donacionesMes.reduce((sum, d) => sum + d.monto_total, 0);
            
            donationTrendData.push({
              month: fecha.toLocaleDateString('es-ES', { month: 'short' }),
              amount: totalMes
            });
          }
        }
      } else if (user.tipo_usuario === 'voluntario') {
        // Datos específicos para voluntarios
        metrics = [
          { title: "Proyectos Participando", value: "0", icon: "mdi-folder-heart", color: "primary" },
          { title: "Horas Voluntariadas", value: "0", icon: "mdi-clock", color: "info" },
          { title: "Tareas Completadas", value: "0", icon: "mdi-check-circle", color: "success" },
          { title: "Evaluaciones Recibidas", value: "0", icon: "mdi-star", color: "warning" }
        ];
      }

      return {
        metrics,
        recentActivities,
        upcomingTasks,
        projectStatusData,
        donationTrendData
      };
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Devolver datos por defecto en caso de error
    return {
      metrics: [
        { title: "Proyectos Activos", value: "0", icon: "mdi-folder-heart", color: "primary" },
          { title: "Voluntarios", value: "0", icon: "mdi-account-group", color: "info" },
          { title: "Donaciones (Este Mes)", value: "$0", icon: "mdi-cash-multiple", color: "success" },
          { title: "Tareas Pendientes", value: "0", icon: "mdi-format-list-checks", color: "warning" }
      ],
      recentActivities: [], 
      upcomingTasks: [],  
      projectStatusData: [],
      donationTrendData: [] 
    };
    }
  }
}