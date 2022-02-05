import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { User } from './entities/users.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { hashPassword } from '../utils/workWithPassword';
import { Repository } from 'typeorm';
import { Task } from '../tasks/entities/task.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: Repository<User>,
    @InjectModel(Task) private taskRepository: Repository<Task>,
  ) {}

  async createUser(dto: CreateUserDto) {
    return this.userRepository
      .create({ ...dto, password: hashPassword(dto.password) })
      .save();
  }

  async getAllUsers() {
    return this.userRepository.find();
  }

  async deleteUser(userId: string) {
    const usersTasks = await this.taskRepository.find({ userId: userId });
    for (let i = 0; i < usersTasks.length; i++) {
      await this.taskRepository.update(usersTasks[i].id, { userId: null });
    }
    return await this.userRepository.delete({ id: userId });
  }

  async getUser(userId: string) {
    const user = await this.userRepository.findOne({ id: userId });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async getUserByLogin(login: string) {
    const user = await this.userRepository.findOne({ login: login });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async updateUser(userId: string, dto: UpdateUserDTO) {
    return this.userRepository.update(userId, { ...dto });
  }
}
