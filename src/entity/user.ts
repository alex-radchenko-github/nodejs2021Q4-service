import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
// import {Board} from "./board";
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

    @ManyToOne(() => User, (user) => user.id)
    user: User;

}