import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { AuthanService } from './auth.service';
import { Request } from 'express';
import { PassThrough } from 'stream';

@Injectable()
export default class AuthanServiceGuard implements CanActivate {
  constructor(private readonly authanService: AuthanService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    console.log(context);
    console.log(request);
    const header = request.header('Authorization');
    if (!header)
      throw new HttpException(
        'Authorization: Bearer <token> header missing',
        HttpStatus.UNAUTHORIZED,
      );

    const parts = header.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer')
      throw new HttpException(
        'Authorization: Bearer <token> header invalid',
        HttpStatus.UNAUTHORIZED,
      );

    const token = parts[1];

    try {
      request['user'] = await this.authanService.authenticate(token);

      return true;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
