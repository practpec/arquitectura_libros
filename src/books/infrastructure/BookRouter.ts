import express from "express";

import { createBookController } from "./dependencies";
import { getByCategoryBookController } from "./dependencies";
import { getByIdBookController } from "./dependencies";

export const bookRouter = express.Router();

bookRouter.get(
  "/",
  getByCategoryBookController.run.bind(getByCategoryBookController)
);
bookRouter.get(
  "/:id",
  getByIdBookController.run.bind(getByIdBookController)
);
bookRouter.post(
  "/",
  createBookController.run.bind(createBookController)
);
