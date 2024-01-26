import express from "express";

import { createAssignamentController } from "./dependencies";
import { getByUserAssignamentController } from "./dependencies";

export const assignamentRouter = express.Router();


assignamentRouter.get(
  "/:id",
  getByUserAssignamentController.run.bind(getByUserAssignamentController)
);
assignamentRouter.post(
  "/",
  createAssignamentController.run.bind(createAssignamentController)
);
