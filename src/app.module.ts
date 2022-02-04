import { Module } from '@nestjs/common';
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
      synchronize: true,
    }),
    UsersModule,
    BoardsModule,
    TasksModule,
  ],
})
// @Module({
//   controllers: [],
//   providers: [],
//   imports: [
//     ConfigModule.forRoot({
//       // envFilePath: `.${process.env.NODE_ENV}.env`,
//       // envFilePath: '.env',
//     }),
//     SequelizeModule.forRoot({
//       dialect: 'postgres',
//       host: 'postgres',
//       port: 5432,
//       username: 'postgres',
//       password: 'postgres',
//       database: 'nodejs2021Q4Service',
//       models: [User, Board],
//       autoLoadModels: true,
//       synchronize: true,
//     }),
//     UsersModule,
//     BoardsModule,
//     TasksModule,
//   ],
// })
export class AppModule {}
