import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { Task } from '../tasks/entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}
  create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.create(createBoardDto).save();
  }

  async findAll() {
    return this.boardRepository.find();
  }

  async findOne(boardId: string) {
    const board = await this.boardRepository.findOne({ id: boardId });
    if (!board) {
      throw new NotFoundException();
    }
    return board;
  }

  async update(boardId: string, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update(boardId, { ...updateBoardDto });
  }

  async remove(userId: string) {
    await this.boardRepository.delete({ id: userId });
    return await this.taskRepository.delete({ boardId: userId });
  }
}
