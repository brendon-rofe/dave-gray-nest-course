import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll() {
    return []
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
