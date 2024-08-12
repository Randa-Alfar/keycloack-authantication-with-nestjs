import { Request } from 'express';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'nest-keycloak-connect';
import AuthanServiceGuard from 'src/auth/auth.serviceguard';
import { KIUser } from './interface';

@UseGuards(AuthanServiceGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Req() request: Request, @Body() kuser: KIUser) {
    const token = request.header('Authorization').split(' ')[1];

    return await this.userService.createUser(token, kuser);
  }
}
