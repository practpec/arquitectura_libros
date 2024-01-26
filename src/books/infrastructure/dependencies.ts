import { CreateBookUseCase } from "../application/CreateBookUseCase";
import { getByCategoryBookUseCase } from "../application/GetByCategoryBookUseCase";
import { GetByIdBookUseCase } from "../application/GetByIdBookUseCase";
import { CreateBookController } from "./controllers/CreateBookController";
import { GetByCategoryController } from "./controllers/GetByCategoryBookController";
import { GetByIdBookController } from "./controllers/GetByIdBookController";
import { MysqlBookRepository } from "./MysqlBookRepository";

export const mysqlBookRepository = new MysqlBookRepository();
export const createBookUseCase = new CreateBookUseCase(
  mysqlBookRepository
);
export const getByCategoryUseCase = new getByCategoryBookUseCase(mysqlBookRepository);
export const getByIdBooktUseCase = new GetByIdBookUseCase(
  mysqlBookRepository
);
export const createBookController = new CreateBookController(
  createBookUseCase
);
export const getByCategoryBookController = new GetByCategoryController(
  getByCategoryUseCase
);
export const getByIdBookController = new GetByIdBookController(
  getByIdBooktUseCase
);
