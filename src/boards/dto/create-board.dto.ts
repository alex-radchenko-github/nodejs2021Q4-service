import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @ApiProperty({ example: 'Work project', description: 'title' })
  readonly title: string;
  readonly userId: string;
  readonly columns: { title: string; order: number }[];
}
