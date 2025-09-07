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

  findById(id: string) {
    return users.filter(user => user.id === id)
  }

  create(user: any) {
    let usersArray = users
    let newUserId = usersArray.length + 1
    const newUserIdString = String(newUserId)
    const newUser = {id: newUserIdString, ...user}
    usersArray.push(newUser)
    return usersArray
  }

}
