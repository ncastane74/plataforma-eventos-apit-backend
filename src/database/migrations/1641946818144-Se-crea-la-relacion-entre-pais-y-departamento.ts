import {MigrationInterface, QueryRunner} from "typeorm";

export class SeCreaLaRelacionEntrePaisYDepartamento1641946818144 implements MigrationInterface {
    name = 'SeCreaLaRelacionEntrePaisYDepartamento1641946818144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departamentos" RENAME COLUMN "id_pais" TO "idPaisId"`);
        await queryRunner.query(`ALTER TABLE "departamentos" ALTER COLUMN "idPaisId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "departamentos" ADD CONSTRAINT "FK_9ad2b8a890c9b7a7282ffa567d3" FOREIGN KEY ("idPaisId") REFERENCES "paises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departamentos" DROP CONSTRAINT "FK_9ad2b8a890c9b7a7282ffa567d3"`);
        await queryRunner.query(`ALTER TABLE "departamentos" ALTER COLUMN "idPaisId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "departamentos" RENAME COLUMN "idPaisId" TO "id_pais"`);
    }

}
