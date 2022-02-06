import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Req,
  Res,
  StreamableFile,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from '../utils/file-upload.utils';
import { JwtAuthGuard } from '../auth/auth.guard';
import { createReadStream } from 'fs';
import * as fs from 'fs';
import { join } from 'path';
import 'dotenv/config';
import fastify = require('fastify');
// import LogsMiddleware from '../middlewares/logs.middleware';
import * as util from 'util';
import * as stream from 'stream';

@Controller('file')
export class FileControllerExpress {
  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      // fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    return {
      originalname: file.originalname,
      filename: file.filename,
    };
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      // fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    return response;
  }

  // express

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}

@Controller('file')
export class FileControllerFastyfy {
  @UseGuards(JwtAuthGuard)
  @Post()
  async uploadFile(
    @Req() req: fastify.FastifyRequest,
    @Res() res: fastify.FastifyReply<any>,
  ) {
    if (!req.isMultipart()) {
      res.send(new BadRequestException());
      return;
    }
    await req.multipart(this.fileFastifySave, onEnd);

    async function onEnd() {
      res.code(200);
    }
    res.send({
      destination: './files',
      filename: 'Название файла смотри в логе',
    });
  }

  //fastify
  @Get(':filename')
  getFile(@Param('filename') filename: string): StreamableFile {
    if (!fs.existsSync(join(join(__dirname, '../../files'), filename))) {
      throw new NotFoundException();
    }
    return new StreamableFile(
      createReadStream(join(join(__dirname, '../../files'), filename)),
    );
  }
  async fileFastifySave(_: string, file, filename): Promise<string> {
    const pipeline = util.promisify(stream.pipeline);
    const randomName = Array(4)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');

    const filename_randomName = `${randomName}-${filename}`;
    const writeStream = fs.createWriteStream(
      `${join(__dirname, '../../files')}/${filename_randomName}`,
    );

    await pipeline(file, writeStream);
    console.log(filename_randomName);
    return filename_randomName;
  }
}
