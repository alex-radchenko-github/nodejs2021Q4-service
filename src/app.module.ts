import { MiddlewareConsumer, Module } from '@nestjs/common';
import 'dotenv/config';
// import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/users.entity';
import { BoardsModule } from './boards/boards.module';
import { Board } from './boards/entities/board.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import LogsMiddleware from './middlewares/logs.middleware';
import { migration1644121535099 } from './migration/1644121535099-migration';

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: `.${process.env.NODE_ENV}.env`,
      // envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nodejs2021Q4Service',
      entities: [User, Board, Task],
      logging: false,
      synchronize: false,
      migrationsRun: true,
      migrations: [migration1644121535099],
    }),
    UsersModule,
    BoardsModule,
    TasksModule,
    AuthModule,
    FileModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogsMiddleware).forRoutes('*');
  }
}
