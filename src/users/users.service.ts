import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/users.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { hashPassword } from '../utils/workWithPassword';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return this.userRepository.create({
      ...dto,
      password: hashPassword(dto.password),
    });
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async deleteUser(userId: string) {
    return await this.userRepository.destroy({ where: { id: userId } });
  }

  async getUser(userId: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async updateUser(userId: string, dto: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(
      { ...dto, password: hashPassword(dto.password) },
      {
        where: { id: userId },
        returning: true,
      },
    );
    return updatedUser[1][0];
  }
}
