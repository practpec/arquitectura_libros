import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { MysqlUserRepository } from "./MysqlUserRepository";

export const mysqlUserRepository = new MysqlUserRepository();
export const createUserUseCase = new CreateUserUseCase(
  mysqlUserRepository
);
export const createUserController = new CreateUserController(
  createUserUseCase
);
