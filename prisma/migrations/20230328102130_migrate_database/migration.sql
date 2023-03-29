-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nutritional_ingredients" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "nutritional_ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qualitative_unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "symbol" TEXT,

    CONSTRAINT "qualitative_unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "img_url" TEXT,
    "description" TEXT,

    CONSTRAINT "material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nutritioanl_ingredients_material" (
    "nutritional_ingredients_id" INTEGER NOT NULL,
    "material_id" INTEGER NOT NULL,
    "qulitativeUnitIt" INTEGER NOT NULL,

    CONSTRAINT "nutritioanl_ingredients_material_pkey" PRIMARY KEY ("nutritional_ingredients_id","material_id","qulitativeUnitIt")
);

-- CreateTable
CREATE TABLE "decisions" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "decisions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reasons" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "decision_id" INTEGER NOT NULL,

    CONSTRAINT "reasons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutritioanl_ingredients_material" ADD CONSTRAINT "nutritioanl_ingredients_material_nutritional_ingredients_i_fkey" FOREIGN KEY ("nutritional_ingredients_id") REFERENCES "nutritional_ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutritioanl_ingredients_material" ADD CONSTRAINT "nutritioanl_ingredients_material_material_id_fkey" FOREIGN KEY ("material_id") REFERENCES "material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nutritioanl_ingredients_material" ADD CONSTRAINT "nutritioanl_ingredients_material_qulitativeUnitIt_fkey" FOREIGN KEY ("qulitativeUnitIt") REFERENCES "qualitative_unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reasons" ADD CONSTRAINT "reasons_decision_id_fkey" FOREIGN KEY ("decision_id") REFERENCES "decisions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
