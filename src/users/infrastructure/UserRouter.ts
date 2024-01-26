import express from "express";

import { createUserController } from "./dependencies";

export const userRouter = express.Router();

userRouter.post(
  "/",
  createUserController.run.bind(createUserController)
);
