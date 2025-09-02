import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getDashboardData(@Request() req) {
    // El decorador @UseGuards junto con @Request() nos da acceso
    // a los datos del usuario que vienen en el payload del JWT.
    return this.authService.getDashboardData(req.user);
  }
}