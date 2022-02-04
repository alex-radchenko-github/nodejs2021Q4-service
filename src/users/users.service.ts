import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/users.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { hashPassword } from '../utils/workWithPassword';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: Repository<User>) {}

  async createUser(dto: CreateUserDto) {
    return this.userRepository
      .create({ ...dto, password: hashPassword(dto.password) })
      .save();
  }

  async getAllUsers() {
    return this.userRepository.find();
  }

  async deleteUser(userId: string) {
    return this.userRepository.delete({ id: userId });
  }

  async getUser(userId: string) {
    const user = await this.userRepository.findOne({ id: userId });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async updateUser(userId: string, dto: UpdateUserDTO) {
    return this.userRepository.update(userId, { ...dto });
  }
}
