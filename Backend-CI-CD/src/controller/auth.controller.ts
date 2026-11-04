import type { Request, Response } from "express";
import {
  isDuplicateEmailError,
  registerUser,
} from "../services/auth.service";

export async function register(req: Request, res: Response) {
  const { name, email,password } = req.body ?? {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim()
  ) {
    return res.status(400).json({
      status: "error",
      message: "name and email are required",
    });
  }

  try {
    const user = await registerUser({ name, email,password });
    return res.status(201).json({
      status: "success",
      message: "User registered",
      data: user,
    });
  } catch (error: any) {
    if (isDuplicateEmailError(error as any)) {
      return res.status(409).json({
        status: "error",
        message: "Email already registered",
      });
    }
    console.log(error.message);
    console.error("Register failed:", error);
    return res.status(500).json({
      status: "error",
      message: "Could not register user",
    });
  }
}
