import {MigrationInterface, QueryRunner} from "typeorm";

export class seCreanLasTablasDeEmpresasYEventos1641933094792 implements MigrationInterface {
    name = 'seCreanLasTablasDeEmpresasYEventos1641933094792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "empresas_ponentes" ("id" SERIAL NOT NULL, "f_creacion" TIMESTAMP NOT NULL DEFAULT now(), "f_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "id_persona" integer NOT NULL, "id_empresa" integer NOT NULL, "descripcion" character varying(255) NOT NULL, "id_operario_creacion" integer NOT NULL, "id_operario_modificion" integer NOT NULL, CONSTRAINT "PK_9b77459537e39f6a2b7cbdd1701" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "empresas" ("id" SERIAL NOT NULL, "f_creacion" TIMESTAMP NOT NULL DEFAULT now(), "f_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "nit" character varying(50) NOT NULL, "razon_social" character varying(100) NOT NULL, "id_municipio" integer NOT NULL, "direccion" character varying(255) NOT NULL, "telefono" character varying(255) NOT NULL, "estado" integer NOT NULL, "id_operario_creacion" integer NOT NULL, "id_operario_modificacion" integer NOT NULL, CONSTRAINT "PK_ce7b122b37c6499bfd6520873e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "departamentos" ("id" SERIAL NOT NULL, "id_pais" integer NOT NULL, "nombre" character varying(50) NOT NULL, CONSTRAINT "PK_6d34dc0415358a018818c683c1e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "municipios" ("id" SERIAL NOT NULL, "id_departamento" integer NOT NULL, "nombre" character varying(50) NOT NULL, CONSTRAINT "PK_10d04b4b4e39ba40240b61e919d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paises" ("id" SERIAL NOT NULL, "nombre" character varying(50) NOT NULL, CONSTRAINT "PK_6b10c7997f3076c02e73c63b043" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "eventos_bitacoras" ("id" SERIAL NOT NULL, "f_creacion" TIMESTAMP NOT NULL DEFAULT now(), "f_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "id_evento" integer NOT NULL, "url" character varying(255) NOT NULL, "url_pdf" character varying(255) NOT NULL, "id_operario_creacion" integer NOT NULL, "id_operario_modificion" integer NOT NULL, CONSTRAINT "PK_7e471f9cfa53f4b9ccb8caf0aac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "eventos_estados" ("id" SERIAL NOT NULL, "f_creacion" TIMESTAMP NOT NULL DEFAULT now(), "f_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "id_evento" integer NOT NULL, "estado" integer NOT NULL, "observacion" character varying(255) NOT NULL, "id_operario_creacion" integer NOT NULL, "id_operario_modificion" integer NOT NULL, CONSTRAINT "PK_399a7dc28c3c98ea1b897e90020" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "eventos_participantes_estados" ("id" SERIAL NOT NULL, "f_creacion" TIMESTAMP NOT NULL DEFAULT now(), "f_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "id_evento_participante" integer NOT NULL, "estado" integer NOT NULL, "observacion" character varying(255) NOT NULL, "id_operario_creacion" integer NOT NULL, "id_operario_modificion" integer NOT NULL, CONSTRAINT "PK_537bd026a93b3df0950923b6139" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "eventos_participantes" ("id" SERIAL NOT NULL, "f_creacion" TIMESTAMP NOT NULL DEFAULT now(), "f_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "id_persona" integer NOT NULL, "id_evento" integer NOT NULL, "id_operario_creacion" integer NOT NULL, "id_operario_modificion" integer NOT NULL, CONSTRAINT "PK_a8c665f4face7856252d62ae1b1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "eventos" ("id" SERIAL NOT NULL, "f_creacion" TIMESTAMP NOT NULL DEFAULT now(), "f_modificacion" TIMESTAMP NOT NULL DEFAULT now(), "id_empresa_ponente" integer NOT NULL, "descripcion" character varying(255) NOT NULL, "fecha" TIMESTAMP, "h_inicio" TIMESTAMP, "h_fin" TIMESTAMP, "tipo_evento" integer NOT NULL, "lugar" character varying(255) NOT NULL, "url" character varying(255) NOT NULL, "contacto" character varying(255) NOT NULL, "id_operario_creacion" integer NOT NULL, "id_operario_modificion" integer NOT NULL, CONSTRAINT "PK_40d4a3c6a4bfd24280cb97a509e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "eventos"`);
        await queryRunner.query(`DROP TABLE "eventos_participantes"`);
        await queryRunner.query(`DROP TABLE "eventos_participantes_estados"`);
        await queryRunner.query(`DROP TABLE "eventos_estados"`);
        await queryRunner.query(`DROP TABLE "eventos_bitacoras"`);
        await queryRunner.query(`DROP TABLE "paises"`);
        await queryRunner.query(`DROP TABLE "municipios"`);
        await queryRunner.query(`DROP TABLE "departamentos"`);
        await queryRunner.query(`DROP TABLE "empresas"`);
        await queryRunner.query(`DROP TABLE "empresas_ponentes"`);
    }

}
