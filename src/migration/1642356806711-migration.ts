import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1642356806711 implements MigrationInterface {
    name = 'migration1642356806711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "board" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying(50) NOT NULL,
                "boardId" uuid,
                CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "columndb" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying(100) NOT NULL,
                "order" integer NOT NULL,
                "linkboard" character varying(100),
                "columnId" uuid,
                CONSTRAINT "PK_21d5148f16c67bd572a9697800a" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "task" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying(50) NOT NULL,
                "order" integer,
                "description" character varying(50) NOT NULL,
                "userId" character varying,
                "boardId" character varying,
                "columnId" character varying,
                CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying(100) NOT NULL,
                "login" character varying(100) NOT NULL,
                "password" character varying(100) NOT NULL,
                "userId" uuid,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "board"
            ADD CONSTRAINT "FK_8db634dbfdd38c51ac9aeed3b2a" FOREIGN KEY ("boardId") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "columndb"
            ADD CONSTRAINT "FK_6bd12d225d73e58af3e3d87423f" FOREIGN KEY ("columnId") REFERENCES "columndb"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD CONSTRAINT "FK_d72ea127f30e21753c9e229891e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "FK_d72ea127f30e21753c9e229891e"
        `);
        await queryRunner.query(`
            ALTER TABLE "columndb" DROP CONSTRAINT "FK_6bd12d225d73e58af3e3d87423f"
        `);
        await queryRunner.query(`
            ALTER TABLE "board" DROP CONSTRAINT "FK_8db634dbfdd38c51ac9aeed3b2a"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "task"
        `);
        await queryRunner.query(`
            DROP TABLE "columndb"
        `);
        await queryRunner.query(`
            DROP TABLE "board"
        `);
    }

}
