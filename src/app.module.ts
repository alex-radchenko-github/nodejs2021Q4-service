import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';

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
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.POSTGRES_HOST,
    //   port: +process.env.POSTGRES_PORT,
    //   username: process.env.POSTGRES_USER,
    //   password: process.env.POSTGRES_PASSWORD,
    //   database: process.env.POSTGRES_DB,
    //   entities: [User, Board, Task],
    //   logging: false,
    //   synchronize: false,
    //   migrationsRun: true,
    //   migrations: [migration1644121535099],
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-83-21-198.compute-1.amazonaws.com',
      port: 5432,
      username: 'kydxwgwxzjpjhr',
      password:
        '8512c3d538a637805b1a8815e872e553064590207df5056ca41de0b1d8dc6f49',
      database: 'db9m5824ko34qc',
      entities: [User, Board, Task],
      logging: false,
      synchronize: false,
      migrationsRun: true,
      migrations: [migration1644121535099],
      ssl: { rejectUnauthorized: false },
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
    if (process.env.FASTIFY_MODE !== 'true') {
      consumer.apply(LogsMiddleware).forRoutes('*');
    }
  }
}
