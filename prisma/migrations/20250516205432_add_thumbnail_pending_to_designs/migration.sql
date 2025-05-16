-- AlterTable
ALTER TABLE "designs" ADD COLUMN     "thumbnail_pending" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "designs_thumbnail_pending_idx" ON "designs"("thumbnail_pending");
