import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Put,
  Post,
  SerializeOptions,
  UseInterceptors,
  Param,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  strategy: 'excludeAll',
})
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, type: User })
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') userId: string) {
    return this.userService.deleteUser(userId);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, type: User })
  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.userService.getUser(userId);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, type: User })
  @Put(':id')
  updateUser(@Param('id') userId: string) {
    return this.userService.getUser(userId);
  }
}
