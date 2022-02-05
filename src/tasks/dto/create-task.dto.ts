import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'title', description: 'title' })
  @IsString({ message: 'Must be a string' })
  readonly title: string;

  @ApiProperty({ example: 'order', description: 'order' })
  readonly order: number;

  @ApiProperty({ example: 'description', description: 'description' })
  @IsString({ message: 'Must be a string' })
  readonly description: string;

  readonly userId: string;
  readonly boardId: string;
  readonly columnId: string;
}
