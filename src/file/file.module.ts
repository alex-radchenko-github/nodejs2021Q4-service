import { Module } from '@nestjs/common';
import {
  FileControllerExpress,
  FileControllerFastyfy,
} from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from '../auth/auth.module';
import dotenv = require('dotenv');
// import { config } from 'dotenv';

@Module({
  controllers: [
    dotenv.config().parsed['FASTIFY_MODE'] === 'true'
      ? FileControllerFastyfy
      : FileControllerExpress,
  ],
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    AuthModule,
  ],
})
export class FileModule {}
