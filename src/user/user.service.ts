import { Injectable } from '@nestjs/common';
import { KIUser } from './interface';

@Injectable()
export class UserService {
  async createUser(token: string, user: KIUser) {
    const url = ' http://localhost:8080/admin/realms/master/users';

    return { user, token };
  }
}
