import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('boards/:boardId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(
    @Param('boardId') boardId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.create(boardId, createTaskDto);
  }

  @Get()
  findAll(@Param('boardId') boardId: string) {
    return this.tasksService.findAll(boardId);
  }

  @Get(':taskId')
  findOne(@Param('boardId') boardId: string, @Param('taskId') taskId: string) {
    return this.tasksService.findOne(boardId, taskId);
  }

  @Put(':taskId')
  update(
    @Param('taskId') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(taskId, updateTaskDto);
  }

  @Delete(':taskId')
  // @HttpCode(204)
  remove(@Param('taskId') taskId: string, @Param('boardId') boardId: string) {
    return this.tasksService.remove(boardId, taskId);
  }
}
