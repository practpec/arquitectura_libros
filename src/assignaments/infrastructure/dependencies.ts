import { CreateAssignamentUseCase } from "../application/CreateAssignamentUseCase";
import { getByUserAssignamentUseCase } from "../application/GetByUserAssignamentCase";
import { CreateAssignamentController } from "./controllers/CreateAssignamentController";
import { GetByUserAssignamentController } from "./controllers/GetByUserAssignamentController";
import { MysqlAssignamentRepository } from "./MysqlAssignamentRepository";

export const mysqlAssignamentRepository = new MysqlAssignamentRepository();
export const createAssiganamentUseCase = new CreateAssignamentUseCase(
  mysqlAssignamentRepository
);
export const getByUserUseCase = new getByUserAssignamentUseCase(mysqlAssignamentRepository);

export const createAssignamentController = new CreateAssignamentController(
  createAssiganamentUseCase
);
export const getByUserAssignamentController = new GetByUserAssignamentController(
  getByUserUseCase
);

