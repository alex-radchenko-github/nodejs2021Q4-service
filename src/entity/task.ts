import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Task extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")

    id: string;

    @Column('varchar', {length: 50})

    title: string;

    @Column('int', {nullable: true})

    order: number;

    @Column('varchar', {length: 50})

    description: string;

    @Column({nullable: true})
    userId: string | null;

    @Column({nullable: true})
    boardId: string;

    @Column({nullable: true})
    columnId: string;



}