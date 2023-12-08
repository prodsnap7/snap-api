/*
  Warnings:

  - Added the required column `style` to the `Variant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Variant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Variant" ADD COLUMN     "style" TEXT NOT NULL,
ADD COLUMN     "weight" TEXT NOT NULL;
