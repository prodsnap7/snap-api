/*
  Warnings:

  - Added the required column `publicId` to the `uploads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "uploads" ADD COLUMN     "publicId" TEXT NOT NULL;
