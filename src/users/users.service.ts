import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import {where} from "sequelize";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async deleteUser(userId: string) {
    return await this.userRepository.destroy({ where: { id: userId } });
  }
  async getUser(userId: string) {
    return await this.userRepository.findOne({ where: { id: userId } });
  }
}
