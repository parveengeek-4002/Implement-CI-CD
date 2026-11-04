ALTER TABLE "User" ADD COLUMN "password" TEXT;
UPDATE "User" SET "password" = 'ChangeMe123' WHERE "password" IS NULL;
ALTER TABLE "User" ALTER COLUMN "password" SET NOT NULL;