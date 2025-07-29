import { Controller, Post, Body, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(':userId/roles/:rolId')
  @HttpCode(200)
  addRolToUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('rolId', ParseIntPipe) rolId: number,
  ) {
    return this.usersService.addRolToUser(userId, rolId);
  }
}