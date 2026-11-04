import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

void prisma.$connect().then(
  () => {
    console.log("Database connected successfully");
  },
  (error:unknown) => {
    console.error("Database connected unsuccessfully", error);
  },
);
