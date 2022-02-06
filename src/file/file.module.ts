import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [FileController],
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    AuthModule,
  ],
})
export class FileModule {}
