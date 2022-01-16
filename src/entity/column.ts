import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
// import {Task} from "./task";


@Entity()
export class Columndb extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")

    id: string;

    @Column('varchar', {length: 100})

    title: string;

    @Column("int")

    order: number;

    @Column('varchar', {length: 100, nullable: true})

    linkboard: string;


    // @ManyToOne(() => Board, board => board.columnsr)
    // board: Board;

    // @OneToMany(() => Task, task => task.column)
    // columns: Task[];

}