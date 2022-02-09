import {MigrationInterface, QueryRunner} from "typeorm";

export class ModificacionRelacionPaisDepartamento1643198917757 implements MigrationInterface {
    name = 'ModificacionRelacionPaisDepartamento1643198917757'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departamentos" DROP CONSTRAINT "FK_9ad2b8a890c9b7a7282ffa567d3"`);
        await queryRunner.query(`ALTER TABLE "municipios" RENAME COLUMN "id_departamento" TO "departamentosId"`);
        await queryRunner.query(`ALTER TABLE "departamentos" RENAME COLUMN "idPaisId" TO "paisId"`);
        await queryRunner.query(`ALTER TABLE "municipios" ALTER COLUMN "departamentosId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "municipios" ADD CONSTRAINT "FK_488194f76368a4f1e98551535c3" FOREIGN KEY ("departamentosId") REFERENCES "departamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "departamentos" ADD CONSTRAINT "FK_d5965811c677912cf9b30c012a8" FOREIGN KEY ("paisId") REFERENCES "paises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departamentos" DROP CONSTRAINT "FK_d5965811c677912cf9b30c012a8"`);
        await queryRunner.query(`ALTER TABLE "municipios" DROP CONSTRAINT "FK_488194f76368a4f1e98551535c3"`);
        await queryRunner.query(`ALTER TABLE "municipios" ALTER COLUMN "departamentosId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "departamentos" RENAME COLUMN "paisId" TO "idPaisId"`);
        await queryRunner.query(`ALTER TABLE "municipios" RENAME COLUMN "departamentosId" TO "id_departamento"`);
        await queryRunner.query(`ALTER TABLE "departamentos" ADD CONSTRAINT "FK_9ad2b8a890c9b7a7282ffa567d3" FOREIGN KEY ("idPaisId") REFERENCES "paises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
