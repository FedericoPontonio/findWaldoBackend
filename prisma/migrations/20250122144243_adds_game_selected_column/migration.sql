/*
  Warnings:

  - Added the required column `gameSelected` to the `Records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Records" ADD COLUMN     "gameSelected" INTEGER NOT NULL;
