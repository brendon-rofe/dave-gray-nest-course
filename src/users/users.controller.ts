import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(@Query("role") role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role)
  }

  @Get("/:id")
  findById(@Param("id") id: string) {
    return { id }
  }

  @Post()
  create(@Body() user: {}) {
    return user
  }

  @Patch("/:id")
  update(@Param("id") id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate }
  }

  @Delete("/:id")
  delete(@Param("id") id: string) {
    return { id }
  }

}
