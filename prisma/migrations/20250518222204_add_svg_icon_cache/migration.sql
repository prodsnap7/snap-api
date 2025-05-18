-- CreateTable
CREATE TABLE "svg_icons" (
    "id" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "page" INTEGER NOT NULL,
    "iconData" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "svg_icons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "svg_icons_query_page_idx" ON "svg_icons"("query", "page");

-- CreateIndex
CREATE UNIQUE INDEX "svg_icons_query_page_key" ON "svg_icons"("query", "page");
