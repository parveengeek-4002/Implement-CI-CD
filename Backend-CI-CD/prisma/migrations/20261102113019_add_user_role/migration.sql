/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN  "role" TEXT ;
UPDATE "User" SET "role" = 'User' WHERE "role" IS NULL;
ALTER TABLE "User" ALTER COLUMN "role" SET NOT NULL



-- AlterTable
-- ALTER TABLE "User" ADD COLUMN "role" TEXT;

-- UPDATE "User" SET "role" = 'user' WHERE "role" IS NULL;

-- ALTER TABLE "User" ALTER COLUMN "role" SET NOT NULL;
