/*
  Warnings:

  - A unique constraint covering the columns `[familyId,categoryId,kindId]` on the table `Font` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fontId,style,weight]` on the table `Variant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "canvasWidth" INTEGER NOT NULL,
    "canvasHeight" INTEGER NOT NULL,
    "background" TEXT NOT NULL,
    "elements" TEXT NOT NULL,
    "fonts" TEXT[],
    "thumbnail" TEXT NOT NULL DEFAULT '',
    "groups" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "templates_tags_idx" ON "templates"("tags");

-- CreateIndex
CREATE UNIQUE INDEX "Font_familyId_categoryId_kindId_unique" ON "Font"("familyId", "categoryId", "kindId");

-- CreateIndex
CREATE UNIQUE INDEX "Variant_fontId_style_weight_unique" ON "Variant"("fontId", "style", "weight");
