-- CreateTable
CREATE TABLE "Records" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "timeRecord" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Records_pkey" PRIMARY KEY ("id")
);
