import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async create(boardId: string, createTaskDto: CreateTaskDto) {
    return this.taskRepository
      .create({ ...createTaskDto, boardId: boardId })
      .save();
  }

  async findAll(id) {
    return this.taskRepository.find({ boardId: id });
  }

  async findOne(boardId: string, taskId: string) {
    const task = await this.taskRepository.findOne({
      id: taskId,
      boardId: boardId,
    });
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  async update(taskId: string, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(taskId, { ...updateTaskDto });
  }

  async remove(boardId, taskId: string) {
    return this.taskRepository.delete({ id: taskId, boardId: boardId });
  }
}
