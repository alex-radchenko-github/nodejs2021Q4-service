import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(@InjectModel(Board) private boardRepository: typeof Board) {}

  async create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.create(createBoardDto);
  }

  async findAll() {
    return await this.boardRepository.findAll();
  }

  async findOne(userId: string) {
    const board = await this.boardRepository.findOne({ where: { id: userId } });
    if (!board) {
      throw new NotFoundException();
    }
    return board;
  }

  async update(boardId: string, updateBoardDto: UpdateBoardDto) {
    const updatedboard = await this.boardRepository.update(
      { ...updateBoardDto },
      {
        where: { id: boardId },
        returning: true,
        silent: true,
      },
    );
    return updatedboard[1][0];
  }

  async remove(boardId: string) {
    return await this.boardRepository.destroy({ where: { id: boardId } });
  }
}
