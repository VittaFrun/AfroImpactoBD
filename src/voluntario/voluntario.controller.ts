import { Controller, Get, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { UpdateVoluntarioDto } from './update-voluntario.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';

@Controller('voluntario')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class VoluntarioController {
  constructor(private readonly service: VoluntarioService) {}

  @Get('perfil')
  @Roles('voluntario')
  getProfile(@GetUser() user: Usuario) {
    return this.service.findByUserId(user.id_usuario);
  }

  @Patch('perfil')
  @Roles('voluntario')
  updateProfile(@GetUser() user: Usuario, @Body() dto: UpdateVoluntarioDto) {
    return this.service.updateByUserId(user.id_usuario, dto);
  }

  @Get()
  @Roles('organizacion', 'admin')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @Roles('organizacion', 'admin')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
}
