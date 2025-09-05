import { Injectable } from '@nestjs/common';
import { users } from './users-data';

@Injectable()
export class UsersService {

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if(role) {
      return users.filter(user => user.role === role)
    }
    return users
  }

}
