import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
// import {Task} from "./task";


@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")

    id: string;

    @Column('varchar', { length: 100 })

    name: string;

    @Column('varchar', { length: 100 })

    login: string;

    @Column('varchar', { length: 100 })

    password: string;

    // @OneToMany(() => Task, task => task.user)
    // tasks: Task[];

}