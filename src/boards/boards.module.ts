import { forwardRef, Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Task } from '../tasks/entities/task.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
  imports: [
    TypeOrmModule.forFeature([Board]),
    TypeOrmModule.forFeature([Task]),
    forwardRef(() => AuthModule),
  ],
  exports: [BoardsService],
})
export class BoardsModule {}
