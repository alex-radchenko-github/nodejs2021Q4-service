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
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/users.entity';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('users')
@ApiTags('Users')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  strategy: 'excludeAll',
})
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
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
  @ApiResponse({ status: 200, type: User })
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDTO) {
    return this.userService.updateUser(id, dto);
  }
}
