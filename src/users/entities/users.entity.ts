import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
@Entity()
export class User extends BaseEntity {
  @ApiProperty({
    example: 'c828512d-b2df-4bb0-a5e4-1f70150ac792',
    description: 'UUID4',
  })
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;

  @ApiProperty({ example: 'Alex', description: 'name' })
  @Column({ type: 'text' })
  @Expose()
  name: string;

  @ApiProperty({ example: 'Alexlogin', description: 'login' })
  @Column({ type: 'text', unique: true })
  @Expose()
  login: string;

  @ApiProperty({ example: '12345678', description: 'password' })
  @Column({ type: 'text' })
  @Exclude()
  password: string;
}
