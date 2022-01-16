import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";


@Entity()
export class Board extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")

    id: string;

    @Column('varchar', { length: 50 })

    title: string;

    // @OneToMany(() => Task, task => task.board)
    // tasks: Task[];

    // @OneToMany(() => ColumnInDB, column => column.board)
    // columnsr: ColumnInDB[];
}
