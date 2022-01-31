import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';

// import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
