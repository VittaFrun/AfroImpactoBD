import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DonacionService } from './donacion.service';
import { CreateDonacionDto } from './create-donacion.dto';
import { UpdateDonacionDto } from './update-donacion.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Usuario } from '../users/user.entity';

@Controller('donacion')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class DonacionController {
  constructor(private readonly service: DonacionService) {}

  @Post()
  @Roles('organizacion', 'admin')
  create(@Body() dto: CreateDonacionDto, @GetUser() user: Usuario) {
    return this.service.create(dto, user);
  }

  @Get()
  @Roles('admin')
  findAll() {
    return this.service.findAll();
  }

  @Get('organizacion/:id')
  @Roles('organizacion', 'admin')
  findAllByOrganizacion(@Param('id') id: string, @GetUser() user: Usuario) {
    return this.service.findAllByOrganizacion(+id, user);
  }

  @Get(':id')
  @Roles('organizacion', 'admin')
  findOne(@Param('id') id: string, @GetUser() user: Usuario) {
    return this.service.findOne(+id, user);
  }

  @Patch(':id')
  @Roles('organizacion', 'admin')
  update(@Param('id') id: string, @Body() dto: UpdateDonacionDto, @GetUser() user: Usuario) {
    return this.service.update(+id, dto, user);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string, @GetUser() user: Usuario) {
    return this.service.remove(+id, user);
  }
}
