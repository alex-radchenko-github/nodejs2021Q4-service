import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({
    type: 'jsonb',
    default: () => "'[]'",
    nullable: false,
  })
  columns: { id: string; title: string; order: number }[];
}
