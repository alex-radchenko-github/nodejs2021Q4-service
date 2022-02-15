import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class BoardColum {
  title: string;
  order: number;
}

export class CreateBoardDto {
  @ApiProperty({ example: 'title', description: 'title' })
  @IsString({ message: 'Must be a string' })
  readonly title: string;

  @ApiProperty({ example: '[]', description: 'columns' })
  readonly columns: BoardColum[];
}
