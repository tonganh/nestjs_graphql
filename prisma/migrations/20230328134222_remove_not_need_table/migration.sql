/*
  Warnings:

  - You are about to drop the `decisions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reasons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reasons" DROP CONSTRAINT "reasons_decision_id_fkey";

-- DropTable
DROP TABLE "decisions";

-- DropTable
DROP TABLE "reasons";
