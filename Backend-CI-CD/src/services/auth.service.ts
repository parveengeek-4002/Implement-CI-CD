import { Prisma } from "@prisma/client"; 
import { prisma } from "../lib/prisma";

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
};
export type LoginInput  = {
  email:string;
}

export async function registerUser(input: RegisterInput) {
  return await prisma.user.create({
    data: {
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      password: input.password.trim(),
      role: "User",
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
    },
  });
}

export async function loginUser(){

}
export function isDuplicateEmailError(error: any): boolean {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  );
}
