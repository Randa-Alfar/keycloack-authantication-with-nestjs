import { IUser } from 'src/user/interface';
import { LoginService } from './login.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async logIn(@Body() user: IUser) {
    return this.loginService.login(user);
  }
}
