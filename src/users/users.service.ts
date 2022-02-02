import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { hashPassword } from './utils/workWithPassword';

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
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  async updateUser(userId: string, dto: UpdateUserDTO) {
    await this.userRepository.update(
      { ...dto, password: hashPassword(dto.password) },
      {
        where: {
          id: userId,
        },
      },
    );
    return this.getUser(userId);
  }
}
