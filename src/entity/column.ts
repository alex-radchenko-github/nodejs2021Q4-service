import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
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


    @ManyToOne(() => Columndb, (column) => column.id)
    column: Columndb;

}