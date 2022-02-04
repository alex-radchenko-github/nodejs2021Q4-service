import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { User } from '../../users/entities/users.entity';

interface BoardCreationAttrs {
  title: string;
  columns: { title: string; order: number }[];
}

@Table({ tableName: 'boards' })
export class Board extends Model<Board, BoardCreationAttrs> {
  @ApiProperty({
    example: 'c828512d-b2df-4bb0-a5e4-1f70150ac792',
    description: 'UUID4',
  })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4(),
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ example: 'Work project', description: 'title' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Work project', description: 'title' })
  @Column({
    type: DataType.JSONB,
    allowNull: false,
    defaultValue: () => '[]',
  })
  columns: { title: string; order: number }[];

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;

  @BelongsTo(() => User)
  owner: User;
}
