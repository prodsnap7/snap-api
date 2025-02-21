-- AlterTable
ALTER TABLE "designs" ADD COLUMN     "templateId" TEXT;

-- AlterTable
ALTER TABLE "templates" ADD COLUMN     "useCount" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "designs" ADD CONSTRAINT "designs_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;
